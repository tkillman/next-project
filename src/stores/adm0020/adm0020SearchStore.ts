import { Instance, types, applySnapshot } from 'mobx-state-tree';
import _ from 'lodash';
import dayjs from 'dayjs';

export type searchFieldType = 'orderDate' | 'errMsg';

/**
 *  AD0020 검색 모델
 */
const model = types
	.model('ad0020SearchModel', {
		/** 스토어 아이덴티티 */
		identifier: types.optional(types.identifier, 'ad0020SearchModel'),
		/** 검색 mcode */
		orderDate: types.optional(types.string, dayjs().format('YYYY-MM-DD')),
		errMsg: types.optional(types.string, '')
	})
	.actions(self => ({
		/** search field set */
		setSearchField(fieldName: searchFieldType, val: any) {
			(self[fieldName] as any) = val;
		},
		/** orderDate set */
		setOrderDate(val: string) {
			self.orderDate = val;
		},
		/** 초기화 */
		setInit() {
			applySnapshot(self, defaultValue);
		}
	}));

/** 초기화 값 */
const defaultValue = {
	identifier: 'ad0020SearchModel',
	orderDate: dayjs()
		.subtract(1, 'days')
		.format('YYYY-MM-DD'),
	dateRange: '1',
	isInvalidDate: false,
	errMsg: ''
};

/** create or initialize */
const create = model.create(defaultValue);

const ad0020SearchStore = {
	create,
	defaultValue,
	model
};

/** 모델 타입 */
export type IAd0020SearchModelType = Instance<typeof model>;

export default ad0020SearchStore;
