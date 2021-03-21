import styled from 'styled-components';
import { Button } from 'reactstrap';
import React, { useRef } from 'react';
import { Input } from 'reactstrap';
import _ from 'lodash';

const Excel = require('exceljs');

/** 엑셀 파싱 데이터*/
interface IExcelRtnValue {
	sheetName: string;
	sheetData: Array<any>;
}

/** 엑셀 파싱 결과코드*/
type OutRetCode = '00' | '99';

/** 엑셀 파싱 결과*/
export interface IExcelParseRes {
	OUT_RET_CODE: OutRetCode;
	OUT_RET_MSG: string;
}

/** 엑셀 컬럼 데이터타입 */
export interface IExcelColDef {
	headerName: string;
	field: string;
	indexNum?: number;
	required?: boolean /** 필수값*/;
	optionsValue?: Array<string> /** 허용값*/;
	unique?: boolean /** 고유한 값*/;
	isOneValue?: boolean /** 하나의 값*/;
}

/** Props */
interface IProps {
	className?: string;
	storeSetMethod: (val: IExcelRtnValue[]) => void;
	excelColInfo: IExcelColDef[];
	callback?: (val: IExcelParseRes) => void;
}

/** 에러 코드 타입 */
type ErrorCode = '01' | '02' | '03' | '04' | '05' | '06';

/** getErrorResult 파라미터 타입 */
interface IGetErrorResultParams {
	errorCode: ErrorCode;
	/** 에러 메세지 중간에 필요한 문자열 */
	innerMessage?: string;
	/** 에러 메세지 끝에 붙는 문자열 */
	additionalMessage?: string;
}

/** Component: 엑셀파싱버튼 */
const BtnExcelFileUpload: React.FC<IProps> = props => {
	const refInputFile = useRef<HTMLInputElement>(null);
	const { excelColInfo, storeSetMethod, callback } = props;

	const getErrorResult = ({
		errorCode,
		additionalMessage = '',
		innerMessage = ''
	}: IGetErrorResultParams) => {
		const errorMessage = {
			'01': '엑셀파일이 아닙니다.',
			'02': `엑셀에 해당 컬럼이 존재하지 않습니다.[${innerMessage}]`,
			'03': `엑셀에 필수값이 비어있습니다.[${innerMessage}]`,
			'04': `엑셀에 허용값 이외의 값이 존재합니다.[${innerMessage}]`,
			'05': `엑셀에 두 개 이상의 값이 존재합니다.[${innerMessage}]`,
			'06': `엑셀에 [${innerMessage}] 은 고유해야 합니다. 중복된 값이 존재합니다.`
		};

		const res: IExcelParseRes = {
			OUT_RET_CODE: errorCode ? '99' : '00',
			OUT_RET_MSG: errorMessage[errorCode]
		};

		callback?.(res);
	};

	/**
	 * 유효성체크(필수값, 허용값)
	 */
	const checkValueVaildate = (colInfo: IExcelColDef, values): boolean => {
		const { headerName, indexNum, required, optionsValue } = colInfo;
		const value = values[indexNum];
		let innerMessage = '';
		/** 필수값 체크*/
		if (!!required && !value) {
			innerMessage = '컬럼명 : ' + headerName;
			getErrorResult({ errorCode: '03', innerMessage: innerMessage });
			return false;
		}

		/** 허용값 체크*/
		if (
			optionsValue &&
			optionsValue.length > 0 &&
			optionsValue.indexOf(value) == -1
		) {
			innerMessage = '허용값 :' + optionsValue + ', 컬럼명 : ' + headerName;
			getErrorResult({ errorCode: '04', innerMessage: innerMessage });
			return false;
		}

		return true;
	};

	/**
	 * 유효성체크(하나의 값)
	 */
	const checkOneValueValidate = (
		excelColArr: IExcelColDef[],
		newRowDataArray
	): boolean => {
		let rtnValue: boolean = true;

		/** 하나의 값 체크*/
		const oneValueColArr = excelColArr.filter(colInfo => {
			return colInfo.isOneValue;
		});

		_.forEach(oneValueColArr, (colInfo: IExcelColDef) => {
			const { headerName, field } = colInfo;

			const oneValueSet = new Set();

			_.forEach(newRowDataArray, newRowData => {
				oneValueSet.add(newRowData[field]);
			});

			if (oneValueSet.size != 1) {
				rtnValue = false;
				let innerMessage = '컬럼명 : ' + headerName;
				getErrorResult({ errorCode: '05', innerMessage: innerMessage });
				return false;
			}
		});

		return rtnValue;
	};

	/**
	 * 유효성체크(유니크 값)
	 */
	const checkUniqueValidate = (
		excelColArr: IExcelColDef[],
		newRowDataArray
	): boolean => {
		let rtnValue: boolean = true;

		/** 유니크한 값*/
		const uniqueColArr = excelColArr.filter(colInfo => {
			return colInfo.unique;
		});

		_.forEach(uniqueColArr, (colInfo: IExcelColDef) => {
			const { headerName, field } = colInfo;
			const uniqueSet = new Set();

			_.forEach(newRowDataArray, newRowData => {
				uniqueSet.add(newRowData[field]);
			});

			if (uniqueSet.size != newRowDataArray.length) {
				rtnValue = false;
				let innerMessage = '컬럼명 : ' + headerName;
				getErrorResult({ errorCode: '06', innerMessage: innerMessage });
				return false;
			}
		});

		return rtnValue;
	};

	/**
	 * 첨부파일변경
	 */
	const handleFileChange = async e => {
		storeSetMethod?.([]); //데이터 초기화
		const file = e.target.files[0];
		if (!file) return;
		const { name: fileName } = file;
		const fileExt = fileName
			.substring(fileName.lastIndexOf('.'), fileName.length)
			.toLowerCase();

		if (!(fileExt == '.xlsx' || fileExt == '.xls')) {
			getErrorResult({ errorCode: '01' });
			throw 'file is not excel';
		}

		const wb = new Excel.Workbook();
		const reader = new FileReader();

		reader.onload = async () => {
			const buffer = reader.result;
			await wb.xlsx.load(buffer).then(workbook => {
				const rtnValue: IExcelRtnValue[] = [];
				workbook.eachSheet(sheet => {
					const { name: sheetName } = sheet;
					const newRowDataArray: Array<any> = [];
					sheet.eachRow((row, rowIndex) => {
						const { values } = row;

						//header index 정보 추출
						if (rowIndex == 1) {
							_.forEach(excelColInfo, (colInfo: IExcelColDef) => {
								const { headerName } = colInfo;
								const indexNum = values.indexOf(headerName);
								if (indexNum == -1) {
									getErrorResult({ errorCode: '02', innerMessage: headerName });
									throw headerName + 'excel column is not found';
								}
								colInfo['indexNum'] = indexNum;
							});
							return true; //header는 데이터에 담지 않는다.
						}

						const newRowData: any = {};
						_.forEach(excelColInfo, (colInfo: IExcelColDef) => {
							const { indexNum, field } = colInfo;
							if (!checkValueVaildate(colInfo, values)) {
								throw 'checkValueVaildate error';
							}

							newRowData[field] = values[indexNum]?? '';
						});

						newRowDataArray.push(newRowData);
					});

					if (!checkOneValueValidate(excelColInfo, newRowDataArray))
						throw 'checkOneValueValidate error';

					if (!checkUniqueValidate(excelColInfo, newRowDataArray)) {
						throw 'checkUniqueValidate error';
					}

					const sheetValue: IExcelRtnValue = {
						sheetName: sheetName,
						sheetData: newRowDataArray
					};

					rtnValue.push(sheetValue);
				});

				storeSetMethod?.(rtnValue);
			});
		};

		await reader.readAsArrayBuffer(file);

		//read 후 파일value 초기화
		refInputFile.current.value = '';
	};

	return (
		<>
			<Button
				size='sm'
				className={props.className}
				onClick={() => refInputFile.current.click()}
			>
				엑셀업로드
			</Button>
			<Input
				type='file'
				style={{ display: 'none' }}
				innerRef={refInputFile}
				onChange={handleFileChange}
			/>
		</>
	);
};

export default BtnExcelFileUpload;
