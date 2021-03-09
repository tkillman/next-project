import { withRouter, SingletonRouter } from '~/utils/routeLink';
import { Navbar, NavbarBrand, Nav, NavItem, Collapse, NavLink } from 'reactstrap';
import { Entity_Login } from '~/gen/graphql-types';
import styled from 'styled-components';
import { IUiModelType } from '~/stores/ui/uiStore';

interface IProps {
	className?: string;
	loginInfo?: Entity_Login;
	uiModel?: IUiModelType;
	router: SingletonRouter;
	opLogoutClick?: () => void;
}

/** style */
const HeaderWrapper = styled('div')`
	.user-name span {
		color: #868e96;
	}

	.logout {
		i,
		span {
			color: #ba1b21;
		}
	}

	.img-logiall-bi {
		height: 45px;
	}

	.logo-text {
		margin-left: 2.5rem;
		height: 35px;
		align-items: center;
		display: flex !important;

		font-size: 1rem;
		font-weight: 600;
		color: #ba1b21;
	}

	.logo-icon {
		display: flex;
		flex-flow: column;
		justify-content: center;

		img {
			width: 25px;
			height: 35px;
		}
	}

	.ti-menu {
		cursor: pointer;
	}
`;

const Header: React.FC<IProps> = props => {
	const showMobilemenu = () => {
		const mainWrapper: HTMLElement = document.getElementById('main-wrapper')!;

		mainWrapper.classList.toggle('show-sidebar');
	};

	// 로그아웃
	const handleLogoutClick = async () => {
		// const result = await setLogout();

		// if (result.data.setLogout.OUT_RET_CODE === '00') {
		// 	// logout callback 수행
		// 	props?.opLogoutClick();

		// 	// ui 스토어 초기화
		// 	props.router.push('/login');
		// }
		console.log('logout');
	};

	return (
		<HeaderWrapper>
			<header className='topbar navbarbg' data-navbarbg='skin6'>
				<Navbar className='top-navbar navbar-light' expand='md'>
					<div className='navbar-header' id='logobg' data-logobg='skin6'>
						{/*--------------------------------------------------------------------------------*/}
						{/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
						{/*--------------------------------------------------------------------------------*/}
						<NavbarBrand href='/'>
							{/* 브랜드 이미지/로고 */}
							<div className='logo-icon'>
								<img
									src='images/brand/logiall-bi-mark.png'
									// src='images/brand/logiall-bi.svg'
									alt='homepage'
									className='img-logiall-bi img-responsive dark-logo'
								/>
							</div>
							<span className='logo-text d-block'>
								<b>생각대로</b> Admin
							</span>
							{/* 브랜드 이미지/로고 */}
						</NavbarBrand>
						{/*--------------------------------------------------------------------------------*/}
						{/* Mobile View Toggler  [visible only after 768px screen]                         */}
						{/*--------------------------------------------------------------------------------*/}
						<a className='nav-toggler d-block d-md-none' onClick={showMobilemenu}>
							<i className='ti-menu ti-close' />
						</a>
					</div>
					<Collapse className='navbarbg' navbar data-navbarbg='skin6'>
						<Nav className='ml-auto float-right' navbar>
							{/* 사용자명 */}
							<NavItem>
								<NavLink href='#' className='user-name'>
									<span>{props.loginInfo ? props.loginInfo.USER_NAME : ''}</span>
								</NavLink>
							</NavItem>
							{/* 사용자명 */}
							{/* 로그아웃 버튼*/}
							<NavItem>
								<NavLink href='#' className='logout' onClick={handleLogoutClick}>
									<i className='fa fa-power-off mr-1 ml-1'></i>
									<span>Logout</span>
								</NavLink>
								{/* 로그아웃 버튼*/}
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</header>
		</HeaderWrapper>
	);
};

export default withRouter(Header);
