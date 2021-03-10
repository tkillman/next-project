import { IAdm0020ModelType } from '~/types/storeTypes';
import { observer } from 'mobx-react';

/** props */
interface IProps {
	className?: string;
	store?: IAdm0020ModelType;
	opSearchClick: () => void;
}

const ADM0020SearchForm: React.FC<IProps> = props => {
    return (
        <div>ADM0020SearchForm</div>
    )
};

export default observer(ADM0020SearchForm);