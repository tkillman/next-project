import { IStore as _IStore } from '~/src/stores/rootStore';
import { IAdm0020ModelType as _IAdm0020ModelType } from '~/stores/adm0020/adm0020Store';


/** 외부에서 타입참조용으로 쓰이는 인터페이스들 */
export interface IStoreInjectType {
	store: IStore;
}
export type IStore = _IStore;
export type IAdm0020ModelType = _IAdm0020ModelType;
