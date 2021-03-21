import React, {
	useImperativeHandle,
	forwardRef,
	useState,
	useEffect
} from 'react';
import { IAdm0020ModelType } from '~/types/storeTypes';
import { observer } from 'mobx-react';
import { Button, CardBody, CardHeader, Col, Row } from 'reactstrap';
import BtnExcelFileUpload, {IExcelColDef, IExcelParseRes} from '~/components/button/BtnExcelFileUpload'

/**  ref type */
export interface IRefADM0020List {
	refetch: () => Promise<void>;
}

/** props */
interface IProps {
	className?: string;
	store?: IAdm0020ModelType;
}
const ADM0020List: React.RefForwardingComponent<IRefADM0020List, IProps> = (
	props,
	ref
)=> {
    const { searchModel, listModel } = props.store;
    const excelColInfo : IExcelColDef[]= [
		{headerName : "콜센타코드", field : "CCCODE"}
	]

	const handleCallback = (res : IExcelParseRes) : void=> {
		console.log('handleCallback', listModel.excelData, res);
	}
	
	const {excelData} = listModel;
	console.log(excelData);
	
    return (
        <div>
			<Button>test</Button>
			<BtnExcelFileUpload excelColInfo= {excelColInfo} storeSetMethod={listModel.setExcelData} callback={handleCallback}>엑셀업로드</BtnExcelFileUpload>
		</div>
    )
};

export default observer(forwardRef(ADM0020List));