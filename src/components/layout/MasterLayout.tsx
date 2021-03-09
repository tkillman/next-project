import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
	SideBarContainer,
	NavPathContainer,
	HeaderContainer
} from '~/containers/share';

interface IProps {
	className?: string;
	children?: React.ReactNode;
}

const MasterLayoutWrapper = styled.div`
	.page-children {
		margin-bottom: 30px;
		flex: 1;
	}
`;

export const MasterLayout: React.FC<IProps> = props => {
	const [sidebarType, setSidebarType] = useState('full');
	const [cssName, setCssName] = useState('show-sidebar');

	// 로딩시, 리사이징시에 사이드바 관련 스타일 유동적으로 변경되게 함
	useEffect(() => {
		const isClient = typeof window === 'object';
		setStyle();

		window.addEventListener('resize', setStyle);

		if (isClient) {
			return () => window.removeEventListener('resize', setStyle);
		}
	}, []);

	// 스타일 set
	const setStyle = () => {
		const winInnerWidth = window.innerWidth;

		setSidebarType(winInnerWidth < 1600 ? 'mini-sidebar' : 'full');
		setCssName(winInnerWidth < 1600 ? 'mini-sidebar' : '');

		// left 0 으로 이동
		setTimeout(() => {
			window.scrollTo({ left: 0 });
		}, 500);
	};

	return (
		<MasterLayoutWrapper {...props}>
			<div
				id='main-wrapper'
				data-theme='light'
				data-layout='vertical'
				data-sidebartype={sidebarType}
				data-boxed-layout='full'
				data-sidebar-position='fixed'
				data-header-position='fixed'
				className={cssName}
			>
				<HeaderContainer></HeaderContainer>

				<SideBarContainer />
				<div className={'page-wrapper d-block'}>
					<div className='page-content container-fluid d-flex flex-column'>
						<NavPathContainer></NavPathContainer>
						<div className='page-children'>{props.children}</div>
					</div>
				</div>
			</div>
		</MasterLayoutWrapper>
	);
};

export default MasterLayout;
