import { useEffect, useState } from 'react';
import SideBar from '~/components/share/SideBar';
import { observer, inject } from 'mobx-react';
import { Entity_Menu_List } from '~/gen/graphql-types';
//import { useGetMenuListQuery } from '~/gql/common/gql.gen';
import { withRouter, SingletonRouter } from '~/utils/routeLink';
import { IStoreInjectType, IUiModelType } from '~/types/storeTypes';
import { getProcOutCursorResult } from '~/utils/viewUtils';
import _ from 'lodash';

interface IProps {
	className?: string;
	store?: IUiModelType;
	router: SingletonRouter;
}

const SideBarContainer: React.FC<IProps> = props => {
	const { store } = props;

	// menu list gql query
	// const {
	// 	data: menuListData,
	// 	loading: menuListLoading,
	// 	error: menuListError
	// } = useGetMenuListQuery({
	// 	fetchPolicy: 'no-cache'
	// });

	//  결과 DATA
	// const resultData = getProcOutCursorResult<Entity_Menu_List[]>({
	// 	gqlData: menuListData
	// });

	// useEffect(() => {
	// 	if (menuListData && props.router) {
	// 		// 스토어 설정
	// 		store.setLeftMenu(resultData);

	// 		// 라우트 path get
	// 		const activateUrl = props.router.asPath;

	// 		// depth3 menu get
	// 		const depth3Menu = store.getMenuByLinkUrl(activateUrl);

	// 		// activate depth3 menu
	// 		if (depth3Menu) {
	// 			store.setLeftMenuActive(depth3Menu.id);
	// 		}
	// 	}
	// }, [menuListData]);

	return (
		<>
			<SideBar uiModel={store} className={props.className} />
		</>
	);
};

export default inject(({ store }: IStoreInjectType) => ({ store: store.uiModel }))(
	withRouter(observer(SideBarContainer))
);
