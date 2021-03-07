import { Instance, types, applySnapshot, flow } from 'mobx-state-tree';
import leftMenuStore from './leftMenuStore';
import modalStore from '~/stores/common/modalStore';
import _ from 'lodash';
import { Entity_Menu_List } from '~/gen/graphql-types';

/**
 * UI 모델 - HTML UI 컨트롤의 상태값
 */
const model = types
	.model('uiModel', {
		/** 스토어 아이덴티티 */
		identifier: types.optional(types.identifier, 'uiModel'),

		/** 레프트 메뉴 리스트 */
		leftMenuList: types.optional(types.array(leftMenuStore.model), []),

		/** 레프트메뉴 depth 1 selected id  */
		depth1SelectedId: types.optional(types.string, ''),

		/** 레프트메뉴 depth 2 selected id  */
		depth2SelectedId: types.optional(types.string, ''),

		/** 레프트메뉴 depth 3 selected id  */
		depth3SelectedId: types.optional(types.string, ''),

		/** 모달 컨텐츠 */
		modalModel: types.optional(modalStore.model, modalStore.defaultValue),
	})
	.actions(self => ({
		/** 레프트메뉴 데이터 set */
		setLeftMenu(menuList: Entity_Menu_List[]) {
			const menuData = _.map(menuList, val => ({
				id: val.MENU_ID,
				refId: val.P_MENU_ID,
				depth: val.LEVEL,
				title: val.MENU_NAME,
				icon: val.ICON,
				linkUrl: val.URL,
				isActive: false,
				menuType: val.MENU_TYPE
			}));

			self.leftMenuList.clear();
			self.leftMenuList.push(...menuData);
		},
		/** 레프트메뉴 selected id set */
		setLeftMenuChangeId(selectedId: string) {
			const menu = _.find(self.leftMenuList, { id: selectedId });
			const depth = menu.depth;

			if (depth === 1) {
				self.depth1SelectedId = selectedId;
			}

			if (depth === 2) {
				self.depth2SelectedId = selectedId;
				self.depth1SelectedId = menu.refId;
			}

			if (depth === 3) {
				self.depth3SelectedId = selectedId;
				self.depth2SelectedId = menu.refId;
				self.depth1SelectedId = _.find(self.leftMenuList, {
					id: self.depth2SelectedId
				}).refId;
			}
		},
		setLeftMenuActive(id: string) {
			const menu = _.find(self.leftMenuList, { id });
			const depth = menu.depth;
			const prevMenu = _.find(self.leftMenuList, { depth, isActive: true });
			const prevMenuId = prevMenu && prevMenu.id;

			(self as IUiModelType).setLeftMenuChangeId(id);

			// depth2 메뉴 toggle 기능
			if (depth === 2) {
				menu.isActive = !menu.isActive;
			}

			if (depth === 3) {
				// 이전 선택한 depth3 메뉴 active false 로 set
				if (prevMenuId && prevMenuId !== menu.id) {
					prevMenu.isActive = false;
				}

				// depth3 메뉴 active set
				menu.isActive = true;

				/* depth3 이면 depth2(여러개 선택가능하므로 filter 적용) 도 active 바꿔줘야함 */
				// 이전에 선택한 depth2 메뉴들(현재 메뉴의 depth2 는 제외) 가져오기
				const prevDepth2Menu = _(self.leftMenuList)
					.filter({ depth: 2, isActive: true })
					.reject({ id: menu.refId })
					.value();

				// 현재 dpth3메뉴의 depth2 메뉴
				const nowDepth2Menu = _.find(self.leftMenuList, { id: menu.refId });

				// 지금 deph3 메뉴의 depth2 메뉴를 제외한  active  depth2 메뉴 모두  active를 false 로 set
				if (prevDepth2Menu) {
					prevDepth2Menu.map(val => (val.isActive = false));
				}

				// 현재 depth3 메뉴의 depth2 메뉴 active=true 로 set
				nowDepth2Menu.isActive = true;
			}
		},
		setInit() {
			applySnapshot(self, defaultValue);
		}
	}))
	.views(self => ({
		/** 메뉴리스트 가져오기(더미데이터) */
		getAllLeftMenuList() {
			return self.leftMenuList;
		},
		/** navpath 가져오기 */
		getNavPaths() {
			// navpath 의 경우는 선택한  depth3 메뉴를 기준으로 데이터를 가져온다.
			//  사용자가 depth3 메뉴를  클릭해서 활성화 해놓은 상태에서 depth2(폴더)를 클릭할 수도 있으니
			// depth2SelectedId 값을 가져오면 안된다.
			if (!self.depth3SelectedId) {
				return null;
			}

			const depth3Menu = _.find(self.leftMenuList, {
				id: self.depth3SelectedId
			});
			const depth2Menu = _.find(self.leftMenuList, { id: depth3Menu.refId });
			const depth1Menu = _.find(self.leftMenuList, { id: depth2Menu.refId });

			return [depth1Menu.title, depth2Menu.title, depth3Menu.title];
		},
		/** depth 1 메뉴 리스트 */
		getDepth1MenuList() {
			return _.filter(self.leftMenuList, { depth: 1 });
		},
		/** depth 2 메뉴 리스트 */
		getDepth2MenuList(refId: string) {
			return _.filter(self.leftMenuList, { depth: 2, refId });
		},
		/** depth 3 메뉴 리스트 */
		getDepth3MenuList(refId: string) {
			return _.filter(self.leftMenuList, { depth: 3, refId });
		},
		/** id를 가지고 메뉴정보 가져오기 */
		getMenuById(id: string) {
			return _.find(self.leftMenuList, { id });
		},
		/** linkUrl 을 가지고 메뉴정보 가져오기 */
		getMenuByLinkUrl(linkUrl: string) {
			return _.find(self.leftMenuList, { linkUrl });
		}
	}));

/** 초기화 값 */
const defaultValue = {
	identifier: 'uiModel',
	leftMenuList: [],
	depth1SelectedId: '',
	depth2SelectedId: '',
	depth3SelectedId: '',
	navPaths: [],
	modalModel: {
		isOpen: false,
		title: '알림',
		bodyContents: '',
		firstBtnText: '확인',
		firstBtnClassName: '',
		secondBtnText: '',
		secondBtnClassName: 'd-none',
		verticalCentered: true
	}
};

/** create or initialize */
const create = model.create(defaultValue);

const uiStore = {
	create,
	defaultValue,
	model
};

/** ui모델 타입 */
export type IUiModelType = Instance<typeof model>;

export default uiStore;
