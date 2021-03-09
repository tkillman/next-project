import styled from 'styled-components';
import BtnSideBarDepth3 from './BtnSideBarDepth3';
import { Collapse } from 'reactstrap';
import { observer } from 'mobx-react';
import { ILeftMenuModelType } from '~/src/@types/storeTypes';

/** Props */
interface IProps {
	className?: string;
	id: string;
	title: string;
	icon: string;
	isActive?: boolean;
	subMenuInfo?: ILeftMenuModelType[];
	linkUrl?: string;
	menuType?: string;
	opDepth2Click?: (selectedId: string, linkUrl: string) => void;
	opDepth3Click?: (selectedId: string, linkUrl: string) => void;
}

/** style */
const BtnSideBarDepth2Wrapper = styled('div')`
	/* transition: all 0.5s ease-out; */
	.badge-info {
		background-color: #398bf7 !important;
	}
`;

/** Component: 사이드바 Depth2 메뉴 */
const BtnSideBarDepth2: React.FC<IProps> = props => {
	// depth2 메뉴 클릭
	const handleDepth2Click = () => {
		props.opDepth2Click(props.id, props.linkUrl);
	};

	// depth3 메뉴 클릭
	const handleDepth3Click = (selectedId: string, linkUrl: string) => {
		props.opDepth3Click(selectedId, linkUrl);
	};

	// 사이드바 css 클래스
	const sideBarLinkCss = () => {
		const arrowCss = props.menuType === 'F' ? 'has-arrow' : '';
		const activateCss = props.isActive && props.menuType === 'N' ? ' active' : '';

		return `${'sidebar-link'} ${arrowCss} ${activateCss}`;
	};

	return (
		<BtnSideBarDepth2Wrapper>
			<li
				className={`sidebar-item ${props.isActive && 'selected'}`}
				onClick={handleDepth2Click}
			>
				<span
					data-toggle='collapse'
					className={sideBarLinkCss()}
					aria-expanded={props.isActive!}
				>
					<i className={`mdi ${props.icon}`}></i>
					<span className={'hide-menu'}>
						{props.title}
						{/* 
						<span className='side-badge badge badge-info'>
							{props.subMenuInfo ? props.subMenuInfo.length : 0}
						</span> */}
					</span>
				</span>

				{!props.linkUrl && (
					<Collapse isOpen={props.isActive}>
						<ul className='first-level'>
							{props.subMenuInfo?.map(menu => (
								<BtnSideBarDepth3
									key={menu.id}
									id={menu.id}
									linkUrl={menu.linkUrl}
									title={menu.title}
									isActive={menu.isActive}
									opDepth3Click={handleDepth3Click}
								></BtnSideBarDepth3>
							))}
						</ul>
					</Collapse>
				)}
			</li>
		</BtnSideBarDepth2Wrapper>
	);
};

export default observer(BtnSideBarDepth2);
