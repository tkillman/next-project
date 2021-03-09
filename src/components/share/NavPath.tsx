import { Fragment } from 'react';
import styled from 'styled-components';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import _ from 'lodash';
import { observer } from 'mobx-react';

/** Props */
interface IProps {
	className?: string;
	navPaths?: string[];
}

/** style */
const NavPathWrapper = styled('div')<IProps>`
	margin-top: -20px;
	font-size: 0.8rem;
	.breadcrumb {
		padding: 0px;
		margin-bottom: 0.5rem;

		a {
			color: #868e96;
		}
	}
	.fa-home {
		margin-right: 0.3rem;
	}
`;

/** Component */
const NavPath: React.FC<IProps> = props => {
	return (
		<NavPathWrapper {...props}>
			<Breadcrumb>
				{_.map(props.navPaths, (pathName, idx) => {
					return (
						<Fragment key={idx}>
							<BreadcrumbItem>
								{idx === 0 && <i className='fas fa-home'></i>}
								{pathName}
							</BreadcrumbItem>
						</Fragment>
					);
				})}
			</Breadcrumb>
		</NavPathWrapper>
	);
};

export default observer(NavPath);
