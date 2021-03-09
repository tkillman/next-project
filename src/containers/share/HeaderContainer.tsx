import { observer, inject } from 'mobx-react';
import { IStoreInjectType, IUiModelType } from '~/types/storeTypes';
import Header from '~/components/share/Header';

interface IProps {
	className?: string;
	store?: IUiModelType;
}

const HeaderContainer: React.FC<IProps> = props => {
	const { store } = props;

	// 로그아웃 클릭시 ui 스토어 초기화
	const handleLogoutClick = () => {
		store.setInit();
	};

	return (
		<>
			<Header
				uiModel={store}
				className={props.className}
				opLogoutClick={handleLogoutClick}
			/>
		</>
	);
};

export default inject(({ store }: IStoreInjectType) => ({ store: store.uiModel }))(
	observer(HeaderContainer)
);
