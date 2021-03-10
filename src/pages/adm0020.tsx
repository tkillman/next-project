import { IStoreInjectType, IAdm0020ModelType } from '~/types/storeTypes';
import { inject, observer } from 'mobx-react';
import withAuth from '~/utils/withAuth';
import styled from 'styled-components';
import { MasterLayout } from '~/components/layout';
import { Card, CardBody, CardGroup } from 'reactstrap';
import ADM0020SearchForm from '~/views/adm0020/ADM0020SearchForm';
import ADM0020List, { IRefADM0020List } from '~/views/adm0020/ADM0020List';
import React, { useRef, useEffect } from 'react';

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

	const refAdm0020List = useRef<IRefADM0020List>(null);

    return (
		<MasterLayout>
			<ADM0020Wrapper>
				<Card>
					<CardBody className='search-form-card-body '>
						<ADM0020SearchForm
							store={props.store}
							opSearchClick={() => console.log('adm0020 click')}
						></ADM0020SearchForm>
					</CardBody>
				</Card>
				<CardGroup className='bottom-area flex-row'>
					<Card className='col-12 border-right-0 card-main'>
						<ADM0020List ref={refAdm0020List} store={props.store}></ADM0020List>
					</Card>
				</CardGroup>
			</ADM0020Wrapper>
		</MasterLayout>
    )
}

export default inject(({ store }: IStoreInjectType) => ({
	store: store.adm0020Model
}))(withAuth(observer(ADM0020)));