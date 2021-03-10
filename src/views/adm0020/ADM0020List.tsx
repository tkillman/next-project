import React, {
	useImperativeHandle,
	forwardRef,
	useState,
	useEffect
} from 'react';
import { IAdm0020ModelType } from '~/types/storeTypes';
import { observer } from 'mobx-react';

/**  ref type */
export interface IRefADM0020List {
	refetch: () => Promise<void>;
}

/** props */
interface IProps {
	className?: string;
	store?: IAdm0020ModelType;
	opSearchClick: () => void;
}
const ADM0020List: React.RefForwardingComponent<IRefADM0020List, IProps> = (
	props,
	ref
)=> {
    const { searchModel } = props.store;
    
    return (
        <div>ADM0020List</div>
    )
};

export default observer(forwardRef(ADM0020List));