import { IStoreInjectType, IAdm0020ModelType } from '~/types/storeTypes';
import { inject, observer } from 'mobx-react';
import withAuth from '~/utils/withAuth';
import styled from 'styled-components';
import { MasterLayout } from '~/components/layout';

/** props */
interface IProps {
	className?: string;
	store: IAdm0020ModelType;
}

/** style */
const ADM0020Wrapper = styled('div')`
	.search-form-card-body {
		padding: 1rem;
	}
`;

const ADM0020: React.FC<IProps> = props => {

    return (
		<MasterLayout>
			<div>ADM0020</div>
			</MasterLayout>
    )
}

export default inject(({ store }: IStoreInjectType) => ({
	store: store.adm0020Model
}))(withAuth(observer(ADM0020)));