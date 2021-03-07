import { Instance, types } from 'mobx-state-tree';

/**
 * 레프트메뉴
 */
const model = types.model('leftMenuModel', {
	/** 스토어 아이덴티티 */
	identifier: types.optional(types.identifier, 'leftMenuModel'),
	id: types.optional(types.string, ''),
	refId: types.maybeNull(types.optional(types.string, '')),
	depth: types.maybeNull(types.optional(types.integer, 1)),
	title: types.maybeNull(types.optional(types.string, '')),
	icon: types.maybeNull(types.optional(types.string, '')),
	linkUrl: types.maybeNull(types.optional(types.string, '')),
	isActive: types.maybeNull(types.optional(types.boolean, false)),
	menuType: types.maybeNull(types.optional(types.string, 'F'))
});

/** 초기화 값 */
const defaultValue = {
	identifier: '',
	id: '',
	refId: '',
	depth: 1,
	title: '',
	icon: '',
	linkUrl: '',
	isActive: false,
	menuType: 'F'
};

const create = model.create(defaultValue);

const leftMenuStore = {
	create,
	defaultValue,
	model
};

export type ILeftMenuModelType = Instance<typeof model>;

export default leftMenuStore;
