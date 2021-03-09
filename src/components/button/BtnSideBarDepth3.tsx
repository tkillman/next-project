import styled from 'styled-components';
import { observer } from 'mobx-react';

/** Props */
interface IProps {
	className?: string;
	id: string;
	linkUrl: string;
	title: string;
	isActive?: boolean;
	opDepth3Click: (selectedId: string, linkUrl: string) => void;
}

/** style */
const BtnSideBarDepth3Wrapper = styled('div')``;

/** Component: 사이드바 Depth2 메뉴 */
const BtnSideBarDepth3: React.FC<IProps> = props => {
	// depth2 메뉴 클릭
	const handleClick = e => {
		// bubble cancel
		e.stopPropagation();

		props.opDepth3Click(props.id, props.linkUrl);
	};

	return (
		<BtnSideBarDepth3Wrapper>
			<li
				className={`sidebar-item ${!!props.isActive && 'selected'}`}
				onClick={handleClick}
			>
				<div>
					<a
						className={`sidebar-link ${!!props.isActive && 'active'}`}
						aria-current='page'
					>
						<i className='mdi mdi-adjust'></i>
						<span className='hide-menu'>{props.title}</span>
					</a>
				</div>
			</li>
		</BtnSideBarDepth3Wrapper>
	);
};

export default observer(BtnSideBarDepth3);
