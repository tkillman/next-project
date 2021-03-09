import styled from 'styled-components';

interface IProps {
	className?: string;
	handleNavClick?: () => void;
	children?: React.ReactNode;
}

const LayerPopupLayoutWrapper = styled.div``;

export const LayerPopupLayout: React.FC<IProps> = props => {
	return (
		<LayerPopupLayoutWrapper {...props}>
			<div className='main-wrapper'>test</div>
		</LayerPopupLayoutWrapper>
	);
};

export default LayerPopupLayout;
