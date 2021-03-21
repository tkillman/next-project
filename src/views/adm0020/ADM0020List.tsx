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
import {useAdm0020GetOrderListQuery} from '~/src/graphql/adm0020/gql.gen'
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
		{headerName : "콜센타코드", field : "CCCODE"},
		{headerName : "CID", field : "CID"},
		{headerName : "기사명", field : "RIDER_INFO"}
	]

	const handleCallback = (res : IExcelParseRes) : void=> {
		console.log('handleCallback', listModel.excelData, res);
	}
	
	const {excelData} = listModel;
	
	const getCccodeByDb = ({excelData : excelData}) => {
		console.log('getCccodeByDb', excelData);
		return excelData;
	} 
	
	const resultData = getCccodeByDb({excelData : excelData});

	console.log(resultData);
	
	const { called: mainListCalled, data: mainListData, refetch: mainListRefetch }
	= useAdm0020GetOrderListQuery({
		fetchPolicy: 'no-cache'
	});


    return (
        <div>
			<Button>test</Button>
			<BtnExcelFileUpload excelColInfo= {excelColInfo} storeSetMethod={listModel.setExcelData} callback={handleCallback}>엑셀업로드</BtnExcelFileUpload>
		</div>
    )
};

export default observer(forwardRef(ADM0020List));