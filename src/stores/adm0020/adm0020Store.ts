import { Instance, types, applySnapshot, destroy } from 'mobx-state-tree';
import _ from 'lodash';
import adm0020SearchStore from './adm0020SearchStore';

/**
 *  AD0020 모델
 */
const model = types
	.model('adm0020Model', {
		/** 스토어 아이덴티티 */
		identifier: types.optional(types.identifier, 'adm0020Model'),
		/** mcode */
		mcode: types.optional(types.string, ''),
		/** orderDate */
		orderDate: types.optional(types.string, ''),
		/** 검색 모델 */
		searchModel: types.optional(
			adm0020SearchStore.model,
			adm0020SearchStore.defaultValue
		)
	})
	.actions(self => ({
		/** 상태값 초기화 */
		setInit() {
			applySnapshot(self, defaultValue);
		},
		setData(mcode: string, orderDate: string) {
			self.mcode = mcode;
			self.orderDate = orderDate;
		}
	}))
	.views(self => ({}));

/** 초기화 값 */
const defaultValue = {
	identifier: 'adm0020Model',
	searchModel: adm0020SearchStore.defaultValue
};

/** create or initialize */
const create = model.create(defaultValue);

const adm0020Store = {
	create,
	defaultValue,
	model
};

/** 모델 타입 */
export type IAdm0020ModelType = Instance<typeof model>;

export default adm0020Store;
