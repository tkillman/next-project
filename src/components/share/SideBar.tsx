import PerfectScrollbar from 'react-perfect-scrollbar';
import { Nav } from 'reactstrap';
import styled from 'styled-components';
import { withRouter, SingletonRouter, Router } from '~/utils/routeLink';
import { observer } from 'mobx-react';
import { IUiModelType } from '~/stores/ui/uiStore';
import { BtnSideBarDepth1, BtnSideBarDepth2 } from '~/components/button';

/** Props */
interface IProps {
	className?: string;
	uiModel?: IUiModelType;
	router: SingletonRouter;
}

/** style */
const SideBarWrapper = styled('div')`
	/* 클릭시 텍스트 선택되어 색깔이 fill 되는것 막기 */
	.left-sidebar {
		-ms-user-select: none;
		-moz-user-select: -moz-none;
		-khtml-user-select: none;
		-webkit-user-select: none;
		user-select: none;
	}
`;

/** Component: 사이드바 */
const Sidebar: React.FC<IProps> = props => {
	const { uiModel } = props;

	// depth2 클릭시
	const handleDepth2Click = (selectedId, linkUrl) => {
		uiModel.setLeftMenuActive(selectedId);

		if (linkUrl) {
			Router.pushRoute(linkUrl);
		}
	};

	// depth3 클릭시
	const handleDepth3Click = (selectedId, linkUrl) => {
		uiModel.setLeftMenuActive(selectedId);

		if (linkUrl) {
			Router.pushRoute(linkUrl);
		}
	};

	// depth2 메뉴 리스트
	const btnDepth2List = (refId: string) => {
		return uiModel.getDepth2MenuList(refId).map(menu => {
			const depth3Menu = uiModel.getDepth3MenuList(menu.id);

			return (
				<BtnSideBarDepth2
					key={menu.id}
					id={menu.id}
					title={menu.title}
					icon={menu.icon}
					subMenuInfo={depth3Menu}
					isActive={menu.isActive}
					linkUrl={menu.linkUrl}
					menuType={menu.menuType}
					opDepth2Click={handleDepth2Click}
					opDepth3Click={handleDepth3Click}
				></BtnSideBarDepth2>
			);
		});
	};

	// depth1 메뉴 리스트
	const btnDepth1List = () => {
		return uiModel.getDepth1MenuList().map(menu => {
			const depth2List = btnDepth2List(menu.id);

			return (
				<div key={menu.id}>
					<BtnSideBarDepth1 title={menu.title}></BtnSideBarDepth1>
					{depth2List}
				</div>
			);
		});
	};

	return (
		<SideBarWrapper>
			<aside className='left-sidebar' data-sidebarbg='skin5'>
				<div className='scroll-sidebar ps-container ps-theme-default ps-active-y'>
					<PerfectScrollbar className='sidebar-nav'>
						<Nav id='sidebarnav' className='in'>
							{btnDepth1List()}
						</Nav>
					</PerfectScrollbar>
				</div>
			</aside>
		</SideBarWrapper>
	);
};

export default withRouter(observer(Sidebar));
