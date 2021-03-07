import { Instance, types, applySnapshot } from 'mobx-state-tree';

interface IModalSettingInfo {
	title?: string;
	bodyContents?: string;
	firstBtnText?: string;
	firstBtnClassName?: string;
	opFirstBtnClick?: () => void | Promise<void>;
	secondBtnText?: string;
	secondBtnClassName?: string;
	opSecondBtnClick?: () => void | Promise<void>;
	verticalCentered?: boolean;
	isFade?: boolean;
	opClosed?: () => void;
	isClosedInit?: boolean;
}

/**
 * 모달창 모델
 */
const model = types
	.model('modalModel', {
		/** 스토어 아이덴티티 */
		identifier: types.optional(types.identifier, 'modalModel'),
		isOpen: types.optional(types.boolean, false),
		title: types.optional(types.string, ''),
		bodyContents: types.optional(types.string, ''),
		firstBtnText: types.optional(types.string, ''),
		firstBtnClassName: types.optional(types.string, ''),
		secondBtnText: types.optional(types.string, ''),
		secondBtnClassName: types.optional(types.string, ''),
		verticalCentered: types.optional(types.boolean, true),
		isFade: types.optional(types.boolean, true),
		isClosedInit: types.optional(types.boolean, false)
	})
	.volatile(self => ({
		/** 첫번째 버튼 클릭 이벤트 핸들러 */
		opFirstBtnClick: null,
		/** 두번째 버튼 클릭 이벤트 핸들러 */
		opSecondBtnClick: null,
		/** closed 이벤트 핸들러 */
		opClosed: null
	}))
	.actions(self => ({
		/** 첫번째 버튼 이벤트 핸들러 등록 */
		setFirstBtnClick(callback) {
			self.opFirstBtnClick = callback;
		},
		/** 두번째 버튼 이벤트 핸들러 등록 */
		setSecondBtnClick(callback) {
			self.opSecondBtnClick = callback;
		},
		setClosed(callback) {
			self.opClosed = callback;

			if (self.isClosedInit) {
				(self as IModalModelType).setInit();
			}
		},
		/** 토글 */
		setToggle() {
			self.isOpen = !self.isOpen;
		},
		/** 토글 with 세팅정보 */
		setToggleWithSetting(params: IModalSettingInfo) {
			if (params.title) { self.title = params.title; }
			if (params.bodyContents) { self.bodyContents = params.bodyContents; }
			if (params.firstBtnText) { self.firstBtnText = params.firstBtnText; }
			if (params.firstBtnClassName) { self.firstBtnClassName = params.firstBtnClassName; }
			if (params.opFirstBtnClick) { self.opFirstBtnClick = params.opFirstBtnClick; }
			if (params.secondBtnText) { self.secondBtnText = params.secondBtnText; }
			if (params.secondBtnClassName) { self.secondBtnClassName = params.secondBtnClassName; }
			if (params.opSecondBtnClick) { self.opSecondBtnClick = params.opSecondBtnClick; }
			if (params.verticalCentered !== undefined) { self.verticalCentered = params.verticalCentered; }
			if (params.opClosed) { self.opClosed = params.opClosed; }
			if (params.isFade !== undefined) { self.isFade = params.isFade; }
			if (params.isClosedInit !== undefined) { self.isClosedInit = params.isClosedInit; }

			self.isOpen = !self.isOpen;
		},
		/** 오픈 여부 */
		setOpen(val: boolean) {
			self.isOpen = val;
		},
		/** 타이틀 set */
		setTitle(val: string) {
			self.title = val;
		},
		/** 컨텐츠 바디 set */
		setBodyContents(val: string) {
			self.bodyContents = val;
		},
		/** 첫번째 버튼 set */
		setFirstBtnText(val: string) {
			self.firstBtnText = val;
		},
		/** 첫번째 버튼 css class set */
		setFirstBtnClassName(val: string) {
			self.firstBtnClassName = val;
		},
		/** 두번째 버튼 set */
		setSecondBtnText(val: string) {
			self.secondBtnText = val;
		},
		/** 두번째 버튼 css class set */
		setSecondBtnClassName(val: string) {
			self.secondBtnClassName = val;
		},
		/** 세로측에서 센터로 위치 할지 여부 */
		setVerticalCentered(val: boolean) {
			self.verticalCentered = val;
		},
		/** fade set */
		setIsFade(val: boolean) {
			self.isFade = val;
		},
		/** 초기화 */
		setInit() {
			// volatile init
			self.opFirstBtnClick = null;
			self.opSecondBtnClick = null;
			self.opClosed = null;

			applySnapshot(self, defaultValue);
		}
	}));

/** 초기화 값 */
const defaultValue = {
	identifier: 'modalModel',
	isOpen: false,
	title: '알림',
	bodyContents: '',
	firstBtnText: '확인',
	firstBtnClassName: 'd-block',
	opFirstBtnClick: null,
	secondBtnText: '',
	secondBtnClassName: 'd-none',
	opSecondBtnClick: null,
	verticalCentered: true,
	isFade: true,
	opClosed: null,
	isClosedInit: false
};

const create = model.create(defaultValue);

const modalStore = {
	create,
	defaultValue,
	model
};

export type IModalModelType = Instance<typeof model>;

export default modalStore;
