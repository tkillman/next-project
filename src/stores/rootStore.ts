import { applySnapshot, Instance, types } from 'mobx-state-tree';
import uiStore from '~/stores/ui/uiStore';
/** adm */
import adm0020Store from '~/stores/adm0020/adm0020Store';

export type IStore = Instance<typeof store>;

let initStore: IStore = null as any;

/**
 * store
 */
const store = types.model('store', {
	/** 스토어 아이덴티티 */
	identifier: types.optional(types.identifier, 'store'),

	/** UI 모델 */
	uiModel: types.optional(uiStore.model, () => uiStore.create),

	/** adm */

	/** adm0020 모델 */
	adm0020Model: types.optional(adm0020Store.model, () => adm0020Store.create),
});

/** 스토어 initialize */
const initializeStore = (isServer, snapshot = null) => {
	const defaultValue = {
		uiModel: { ...uiStore.defaultValue },
		/** adm Model */
		adm0020Model: { ...adm0020Store.defaultValue },
	};

	// 서버일 경우에 대한 로직 작성
	if (isServer) {
		initStore = store.create(defaultValue);
	}

	// 클라이언트일 경우에 대한 로직 작성
	if ((store as any) === null) {
		initStore = store.create(defaultValue);
	}

	// 스냅샷 있을 경우 스토어에 스냅샷을 적용
	if (snapshot) {
		applySnapshot(initStore, snapshot);
	}

	return initStore;
};

export { initializeStore };
