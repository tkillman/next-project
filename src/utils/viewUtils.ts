import _ from 'lodash';
import { MutableRefObject } from 'react';
import { NumberFormatProps, FormatInputValueFunction } from 'react-number-format';
import dayjs from 'dayjs';
//import { ValueFormatterParams } from '@ag-grid-enterprise/all-modules';
//import { IRefAgExcelExport } from '~/components/aggrid/AgExcelExport';

/**
 *  default value 세팅
 *  @param val - original value
 *  @defaultValue - 대체 value
 */
export const toDefault = (val: string, defaultValue?: string) => {
	try {
		defaultValue = defaultValue ?? '';

		return val === '' ? defaultValue : _.defaultTo(val, defaultValue);
	} catch (e) {
		return defaultValue;
	}
};

/**
 * default value 세팅 - parse int
 * @param val 숫자형태의 스트링 값
 * @param defaultValue 대체 value
 */
export const toDefaultInt = (val?: string | number, defaultValue?: number) => {
	try {
		// defaultValue 에 null 로 셋팅하는 경우도 있으므로 undefined 에 대해서만 0 으로 설정한다.
		defaultValue = defaultValue === undefined ? 0 : defaultValue;

		return !!val ? Number(val) : defaultValue;
	} catch (e) {
		return defaultValue;
	}
};

/**
 *  소수점 자리수만큼 잘러서 반환
 * @param val  - 바꿀  숫자
 * @param pointCalc - 10: 소수점 한자리만 남긴다, 100: 소수점 2자리...
 */
export const floorCalc = (val, pointCalc) => {
	return Math.floor(val * pointCalc) / pointCalc;
};

/**
 *  소수점 한자리까지만 표시해서 반환
 * @param val  - 바꿀  숫자
 */
export const floorCalc10 = val => {
	const paramVal = typeof val === 'string' ? parseFloat(val) : val;

	return floorCalc(paramVal, 10);
};

/**
 *  소수점 한자리까지만 표시하고 천단위 콤마찍어서 스트링 형태로 반환
 * @param val  - 바꿀  숫자
 */
// export const gridFloorCalcParse = (val: any) => {
// 	return val.value !== '' && val.value !== undefined
// 		? convertMoneyText(floorCalc10(val.value).toString())
// 		: '';
// };

/**
 *  돈표시 콤마 표현으로 convert - 일반숫자형태의 스트링을 콤마단위로 찍어서 반환
 * @param val 숫자형태의 value
 */
// export const convertMoneyText = (val: string | number | ValueFormatterParams) => {
// 	// ag-grid의 ValueFormatterParams 형태 인지 여부 true/false
// 	const isValueFormat = typeof val === 'object' && 'api' in (val as any);

// 	const moneyVal =
// 		typeof val === 'number'
// 			? val.toString()
// 			: isValueFormat
// 			? (val as ValueFormatterParams).value?.toString()
// 			: val;

// 	return !!moneyVal ? moneyVal.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0';
// };

export const convertHH24mmText = (val: string | number) => {
	const missVal = typeof val === 'number' ? val.toString() : val;

	return !!missVal ? missVal.replace(/\B(?=(\d{2})+(?!\d))/g, ':') : '';
};

/**
 * 사업자번호 변경
 * @param val 1515121515 -> 151-51-21515
 */
export const convertCompanynoText = (val: string) => {
	return val.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
};

/**
 * ZIPCODE 변경 59036 -> 59-036
 */
export const convertZipCodeText = (val: string) => {
	if (!val) {
		return '';
	}

	if (val.length === 5) {
		return val.replace(/(\d{2})(\d{3})/, '$1-$2');
	} else if (val.length === 6) {
		return val.replace(/(\d{3})(\d{3})/, '$1-$2');
	}
};

/**
 * ZIP_CODE, ADDR1, ADDR2 를 받아서 (53-776) 주소1 주소2 형식으로 반환
 */
export const convertAddrZipCode = (
	zipCode: string,
	addr1: string,
	addr2: string
) => {
	zipCode = zipCode ? `(${convertZipCodeText(zipCode)}) ` : '';

	return `${zipCode}${addr1 ?? ''} ${addr2 ?? ''}`;
};

/**
 * 전화번호, 핸드폰형식으로 변환
 * @param val 01099887772
 * @param type 0: **** 으로 표시, 1: 모두 표시
 */
export const convertPhoneText = (val: string, type: 0 | 1) => {
	let formatNum = '';

	if (!val) {
		return '';
	}

	if (val.length === 11) {
		formatNum =
			type === 0
				? val.replace(/(\d{3})(\d{4})(\d{4})/, '$1-****-$3')
				: val.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
	} else if (val.length === 8) {
		formatNum = val.replace(/(\d{4})(\d{4})/, '$1-$2');
	} else {
		if (val.indexOf('02') === 0) {
			formatNum =
				type === 0
					? val.replace(/(\d{2})(\d{4})(\d{4})/, '$1-****-$3')
					: val.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
		} else {
			formatNum =
				type === 0
					? val.replace(/(\d{3})(\d{3})(\d{4})/, '$1-***-$3')
					: val.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
		}
	}

	return formatNum;
};

/**
 *  20201123 형태의 날짜값을 2020-11-23 스트링으로 변경해서 반환
 * @param val 변경할 숫자값(ex: 20201123)
 * @param charVal  날짜 표시 캐릭터 문자(ex: -)
 */
// export const convertYYYYmmddText = (val: string | number, charVal: string) => {
// 	const yyyyMMdd = typeof val === 'number' ? val.toString() : val;
// 	const matchResult = yyyyMMdd.match(/^(\d{4})(\d{1,2})(\d{1,2})$/);

// 	const isMatch = !!matchResult && matchResult.length > 0;
// 	const yyyy = isMatch ? matchResult[1] : '';
// 	const mm = isMatch ? matchResult[2] : '';
// 	const dd = isMatch ? matchResult[3] : '';
// 	charVal = !!charVal ? charVal : '-';

// 	return isMatch ? `${yyyy}${charVal}${mm}${charVal}${dd}` : '';
// };

/**
 *  20201123 형태의 날짜값을 2020-11-23 스트링으로 변경해서 반환
 * @param val 변경할 숫자값(ex: 20201123)
 */
export const convertDateText = (val: string | number) => {
	if (!val) {
		return '';
	}

	let result = typeof val === 'number' ? val.toString() : val;

	// 만약 13자리 주민번호가 파라메터로 들어 왔을 경우
	if (result.length === 13) {
		result = result.slice(0, 6);
	}

	// 860213 형식 convert
	if (result.length === 6) {
		return result.replace(/(\d{2})(\d{2})(\d{2})/, '$1-$2-$3');
	}

	// 0000-00-00 형식
	if (result === '00000000') {
		return '0000-00-00';
	}

	return dayjs(val).format('YYYY-MM-DD');
};

/**
 *  20201123 형태의 날짜값을 fotmat(YYYY-MM-DD 형태) 스트링으로 변경해서 반환
 * @param val 변경할 숫자값(ex: 20201123)
 * @param format  날짜 표시 FORMAT (YYYY-MM-DD)
 */
export const convertDateTextFormat = (val: string | number, format: string) => {
	if (!val) {
		return '';
	}

	return dayjs(val).format(format);
};

/**
 * 컬럼별 합계 함수
 * @param resultData - data
 * @param colName - 컬럼명
 */
export const sumCol = (resultData: any, colName: string) => {
	const sumVal = _.sumBy(resultData, (val: any) => parseFloat(val[colName] ?? 0));

	return resultData ? sumVal : 0;
};

/**
 * 여러개 컬럼별 합계 함수
 * @param resultData - data
 * @param arrayColName - 합계를 가져올 컬럼들 (ex. ['TOT_CNT', 'OK_CNT'])
 */
export const sumArrayCol = <T extends object>(
	data: T[],
	arrayColName: Array<keyof T>
): T => {
	const rtnVal: any = {};

	_.each(data, val => {
		_.each(arrayColName, col => {
			rtnVal[col] = (rtnVal[col] ?? 0) + val[col];
		});
	});

	return rtnVal;
};

/**
 * 해당컬럼에서 0보다 큰 값이 있는 개체의 count 수(ex. 기사별 근무현황의 근무계에서 쓰임)
 * @param resultData - data
 * @param colName - 컬럼명
 */
export const countCol = (resultData: any, colName: string) => {
	return _.filter(resultData, val => val[colName] > 0).length;
};

/**
 * D01 ~ D31 or A01 ~ A31 까지의 금액 합계
 * @param resultData - data
 * @param prefix - D01 컬럼이면 D 만 입력 A01 컬럼이면 A 만 입력
 */
export const totAmt = (resultData: any, prefix: string) => {
	const sumVal = _.sumBy(
		resultData,
		(val: any) =>
			val[prefix + '01'] +
			val[prefix + '02'] +
			val[prefix + '03'] +
			val[prefix + '04'] +
			val[prefix + '05'] +
			val[prefix + '06'] +
			val[prefix + '07'] +
			val[prefix + '08'] +
			val[prefix + '09'] +
			val[prefix + '10'] +
			val[prefix + '11'] +
			val[prefix + '12'] +
			val[prefix + '13'] +
			val[prefix + '14'] +
			val[prefix + '15'] +
			val[prefix + '16'] +
			val[prefix + '17'] +
			val[prefix + '18'] +
			val[prefix + '19'] +
			val[prefix + '20'] +
			val[prefix + '21'] +
			val[prefix + '22'] +
			val[prefix + '23'] +
			val[prefix + '24'] +
			val[prefix + '25'] +
			val[prefix + '26'] +
			val[prefix + '27'] +
			val[prefix + '28'] +
			val[prefix + '29'] +
			val[prefix + '30'] +
			val[prefix + '31']
	);

	return !resultData ? 0 : sumVal;
};

// D01 ~ D31 까지의 금액 합계(연산으로 인한 시간소비가 있으므로 고려)
// export const totAmt = (resultData, prefix) =>
// 	!resultData
// 		? 0
// 		: _.sumBy(resultData, (val: any) => {
// 				let sumVal = 0;

// 				for (let i = 1; i <= 31; i++) {
// 					let colNumNm = prefix;

// 					if (i.toString().length < 2) {
// 						colNumNm += '0';
// 					}

// 					colNumNm += i.toString();

// 					sumVal += val[colNumNm];
// 				}

// 				return sumVal;
// 		  });

/**
 * react-number-format 컨트롤에 전달할 프로퍼티값
 * 참고: https://github.com/s-yadav/react-number-format
 * 숫자만 입력받는 형식
 * @param val - 디폴트값
 * @param displayType - 'input' | 'text'
 */
export const numberFormatGeneral = (
	val: string,
	displayType: 'input' | 'text',
	format?: string | FormatInputValueFunction
) => {
	const rtnVal: NumberFormatProps = {
		defaultValue: val,
		thousandSeparator: false,
		decimalScale: 0,
		displayType,
		format
	};

	return rtnVal;
};

/**
 * react-number-format 컨트롤에 전달할 프로퍼티값
 * 참고: https://github.com/s-yadav/react-number-format
 * 천단위로 콤마 찍는 형식
 * @param val - 디폴트값
 * @param displayType - 'input' | 'text'
 */
export const numberFormatThound = (
	val: string,
	displayType: 'input' | 'text'
): NumberFormatProps => {
	const rtnVal = numberFormatGeneral(val, displayType);

	rtnVal.decimalScale = 0;
	rtnVal.thousandSeparator = true;

	return rtnVal;
};

/**
 * react-number-format 컨트롤에 전달할 프로퍼티값
 * 참고: https://github.com/s-yadav/react-number-format
 * 주민번호 형식
 * @param val - 디폴트값
 * @param displayType - 'input' | 'text'
 */
export const numberFormatRegNo = (
	val: string,
	displayType: 'input' | 'text'
): NumberFormatProps => {
	const rtnVal = numberFormatGeneral(val, displayType);
	rtnVal.format = '######-#######';

	return rtnVal;
};

/**
 * react-number-format 컨트롤에 전달할 프로퍼티값
 * 참고: https://github.com/s-yadav/react-number-format
 * 패스워드 형식
 * @param val - 디폴트값
 * @param displayType - 'input' | 'text'
 */
export const numberFormatPwd = (
	val: string,
	displayType: 'input' | 'text'
): NumberFormatProps => {
	const rtnVal: NumberFormatProps = {
		defaultValue: val,
		type: 'password',
		displayType
	};

	return rtnVal;
};

/**
 * react-number-format 컨트롤에 전달할 프로퍼티값
 * 참고: https://github.com/s-yadav/react-number-format
 * 소수점 형태(ex. 723.15512)
 * @param val - 디폴트값
 * @param displayType - 'input' | 'text'
 */
export const numberFormatFloat = (
	val: string,
	displayType: 'input' | 'text'
): NumberFormatProps => {
	const rtnVal: NumberFormatProps = {
		defaultValue: val,
		displayType,
		decimalScale: 10
	};

	return rtnVal;
};

/**
 * react-number-format 컨트롤에 전달할 프로퍼티값
 * 참고: https://github.com/s-yadav/react-number-format
 * 날짜 - YYYY-MM-DD 형식
 * @param val - 디폴트값
 * @param displayType - 'input' | 'text'
 */
export const numberFormatYYYYMMDD = (
	val: string,
	displayType: 'input' | 'text'
) => {
	const rtnVal: NumberFormatProps = {
		defaultValue: val,
		format: '####-##-##',
		placeholder: 'YYYY-MM-DD',
		mask: ['Y', 'Y', 'Y', 'Y', 'M', 'M', 'D', 'D'],
		displayType
	};

	return rtnVal;
};

/**
 * 타겟 json 오브젝트(targetObj)에 base json 오브젝트(baseObj)의 값을 복사에 키값 기준으로 update 한다.
 * @param baseObj update 의 기준이 되는 base json 오브젝트
 * @param targetObj update 대상이 되는 target json 오브젝트
 */
export const updateObjWithKeys = (baseObj, targetObj) => {
	_.keys(baseObj).forEach(key => {
		if (_.has(targetObj, key)) {
			targetObj[key] = baseObj[key];
		}
	});
};

/**
 * 프로시저 결과값 가져오기 파라메터 타입
 * @interface IProcOutCursorResult
 */
interface IProcOutCursorResult {
	gqlData: any;
	defaultValue?: any;
	isOnlySingleRow?: boolean;
	cursorName?: string;
	callback?: (resultData: any, totalCount?: number) => void;
}

/** 프로시저 또는 다이나믹쿼리결과값 가져오기 */
export const getProcOutCursorResult = <T = any>({
	gqlData,
	defaultValue,
	isOnlySingleRow,
	cursorName,
	callback
}: IProcOutCursorResult) => {
	const fieldName = gqlData ? Object.keys(gqlData)[0] : '';
	const data = gqlData ? gqlData[fieldName] : null;
	const outResult = data ? data.OUT_RESULT : null;
	const outRetCode = outResult ? data.OUT_RET_CODE : '99';
	let outCursorResult = null;
	const curName = cursorName ?? 'OUT_RET_CURSOR';

	console.log(fieldName);
	console.log(data);
	console.log(outResult);
	console.log(outRetCode);
	console.log(curName);

	if (outResult && outRetCode === '00' && outResult.length > 0) {
		console.log('in');
		const retCursor = outResult[0][curName] ?? outResult;
		console.log(retCursor);
		outCursorResult =
			retCursor?.length > 0
				? retCursor
				: !retCursor && outResult.length > 0
				? outResult
				: null;
	}

	// return value
	const rtnValue = outCursorResult
		? outCursorResult
		: defaultValue
		? defaultValue
		: null;

	// 프로시저 리턴 컬럼중 TOTAL_COUNT 가 있으면 반환
	const totalCount =
		outCursorResult && outCursorResult.length > 0 && outCursorResult[0].TOTAL_COUNT
			? outCursorResult[0].TOTAL_COUNT
			: 0;

	// 콜백함수 수행
	callback?.(rtnValue, totalCount);

	return rtnValue as T;
};

/**
 * 오브젝트 array 값들중에서
 * 지정된 valueField명 labelField명에 해당하는 값을 찾은뒤
 * value / label 배열값으로 반환함
 */
export const convertOption = (
	selectData: any[],
	valueField: string,
	labelField: string
): Array<{
	value: string;
	label: string;
}> => {
	const result = _.map(selectData, val => {
		const opt = {
			value: val[valueField],
			label: val[labelField]
		};

		return opt;
	});

	return result;
};

/**
 * 엑셀다운로드 파라메터 타입
 * @interface IExcelDown
 */
// interface IExcelDown {
// 	refetchMethod: (vars: any) => Promise<any>;
// 	refetchVars: any;
// 	refExcelComponent: MutableRefObject<IRefAgExcelExport>;
// }

/**
 * 엑셀다운로드
 * @param params IExcelDown type
 */
// export const excelDown = async (params: IExcelDown) => {
// 	const { data } = await params.refetchMethod({
// 		...params.refetchVars
// 	});

// 	getProcOutCursorResult({
// 		gqlData: data,
// 		callback: (resData, totalCount) => {
// 			params.refExcelComponent.current.setData(resData);
// 			params.refExcelComponent.current.exportExcel();
// 		}
// 	});
// };

/** 검색일자 기준 duration 날짜까지 배열 반환
 * date: 기준날짜 (YYYYMMDD 형식)
 * duration: 반환할 바운더리 날짜
 * ex. -7 이면 -7일째부터 기준날짜까지 반환, 7 이면 기준날짜부터 7일째까지 반환
 * outFormat: output 반환 날짜 형식
 */
export function* getDuedayArray(
	date: string,
	duration: number,
	outFormat: string
) {
	const nowDay = dayjs(date, 'YYYYMMDD');

	if (duration < 0) {
		for (let x = 6; x > 0; x--) {
			yield dayjs(nowDay)
				.add(x * -1, 'day')
				.format('MM/DD');
		}

		yield nowDay.format('MM/DD');
	} else {
		yield nowDay.format('MM/DD');

		for (let x = 0; x < duration; x++) {
			yield dayjs(nowDay)
				.add(x, 'day')
				.format('MM/DD');
		}
	}
}
