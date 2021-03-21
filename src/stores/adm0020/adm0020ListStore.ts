import { Instance, types, applySnapshot } from 'mobx-state-tree';

/**
 *  AD0020 list 모델
 */
const model = types
	.model('ad0020ListModel', {
		/** 스토어 아이덴티티 */
		identifier: types.optional(types.identifier, 'ad0020ListModel')
	}).volatile(self => ({
        excelData:[]
    }))
	.actions(self => ({
        setExcelData (arr) {
            console.log('setExcelData', arr);
            self.excelData = arr;
        }
	}));

/** 초기화 값 */
const defaultValue = {
	identifier: 'ad0020ListModel'
};

/** create or initialize */
const create = model.create(defaultValue);

const ad0020ListStore = {
	create,
	defaultValue,
	model
};

/** 모델 타입 */
export type IAd0020ListModelType = Instance<typeof model>;

export default ad0020ListStore;
