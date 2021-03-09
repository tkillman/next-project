import styled from 'styled-components';

/** Props */
interface IProps {
	className?: string;
	title: string;
}

/** style */
const BtnSideBarDepth1Wrapper = styled.div``;

/** Component: 사이드바 Depth1 메뉴 */
const BtnSideBarDepth1: React.FC<IProps> = props => {
	return (
		<BtnSideBarDepth1Wrapper>
			<li className={'nav-small-cap'}>
				<i className={'mdi mdi-dots-horizontal'}></i>
				<span className='hide-menu'>{props.title}</span>
			</li>
		</BtnSideBarDepth1Wrapper>
	);
};

export default BtnSideBarDepth1;
