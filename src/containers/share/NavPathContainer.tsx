import { NavPath } from '~/components/share';
import { observer, inject } from 'mobx-react';
import { IStore } from '~/types/storeTypes';

interface IProps {
	className?: string;
	store?: IStore;
}

const NavPathContainer: React.FC<IProps> = props => {
	const { uiModel } = props.store;

	return <NavPath navPaths={uiModel.getNavPaths()} />;
};

export default inject(({ store }) => ({ store }))(observer(NavPathContainer));
