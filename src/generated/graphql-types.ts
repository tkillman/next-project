export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  getCallCenterTestList: Entity_Callcenter_Test_Result;
  getHelloworld: Entity_Result;
  getSessionTest: Entity_Session_User_Test_Result;
  getShopInfoTestList: Entity_Shop_Info_Test_Result;
  getUserTestList: Entity_User_Test_Result;
  getQorderTest: Entity_Qorder_Test_Result;
  getStaticRiderWorkInfoTest: Entity_Static_Rider_Work_Info_Test_Result;
  /** 그룹 리스트 */
  getGroupList: Entity_Group_Result;
  /** 지원센타 리스트 */
  getHelpCenterList: Entity_Helpcenter_Result;
  /** 회원사 리스트 */
  getMembershipList: Entity_Membership_Result;
  /** 콜센타 리스트 */
  getCallcenterList: Entity_Callcenter_Result;
  /** 콜센타 타입 리스트 */
  getCallcenterTypeList: Entity_Callcenter_Type_Result;
  /** 로그인한 회원의 콜센타 리스트 */
  getMemberCallcenterList: Entity_Member_Callcenter_Result;
  /** 공통코드 리스트 */
  getCodeList: Entity_Code_Result;
  /** 재직구분 리스트 */
  getUserLevelList: Entity_Userlevel_Result;
  /** 업종코드 */
  getItemMstList: Entity_Item_Mst_Result;
  /** 영업사원 */
  getSalesManList: Entity_Sales_Man_Result;
  /** 지점선택 팝업의 콜센타 리스트 */
  getPopupCallcenterList: Entity_Popup_Callcenter_List_Result;
  /** 가맹점선택 팝업의 가맹점 리스트 */
  getPopupShopList: Entity_Popup_Shop_List_Result;
  /** 로그인한 회원의 회원사 리스트 */
  getLoginUserMembershipList: Entity_Membership_Result;
  /** 은행 목록 조회 */
  getBankList: Entity_Bank_Result;
  /** 가맹점 업종 조회 */
  getShopItemInfo: Entity_Shop_Item_Result;
  /** API 조회 */
  getApiComGbnList: Entity_Api_Com_Gbn_Result;
  /** ETC CODE 조회 */
  getEtcCodeList: Entity_Etc_Code_Result;
  /** Group Code 조회 */
  getGroupCodeList: Entity_Etc_Code_Result;
  /** COM_GBN 리스트(가맹점 멀티매핑에서 사용)  */
  getComGbnList: Entity_Com_Gbn_Result;
  /** 기사선택 팝업 리스트  */
  getPopupRiderList: Entity_Get_Popup_Rider_List_Result;
  /** 가맹점 리스트 */
  getShopinfoList: Entity_Shopinfo_Result;
  /** 로그인 세션정보 가져오기 */
  getLoginSession: Entity_Login_Result;
  /** [콜센터 하단 SMS 설정]SMS 설정 조회 */
  commonGetServerTime: Entity_Util_Result;
  /** 메뉴 리스트 */
  getMenuList: Entity_Menu_List_Result;
  /** 메뉴 권한 체크 */
  getMenuAuth: Entity_Menu_Auth_Result;
  /** 통계 데이터 조회 */
  adm0010GetDayStatistics: Entity_Adm0010_Result;
  /** 센타 통계 데이터 조회 */
  adm0010GetCenterDayStatistic: Entity_Adm0010_Result;
  /** 통계 데이터 조회 */
  adm0010GetWeekStatistics: Entity_Adm0010_Week_Result;
  /** 센타 통계 데이터 조회 */
  adm0010GetCenterWeekStatistics: Entity_Adm0010_Week_Result;
  /** 가장 최근 날짜 조회 */
  adm0010GetOrderDate: Entity_Adm0010_Order_Result;
  /** 통계 데이터 조회 */
  adm0010GetDayPieStatistics: Entity_Adm0010_Pie_Result;
  /** 센타 파이 통계 데이터 조회 */
  adm0010GetCenterDayPieStatistic: Entity_Adm0010_Pie_Result;
  /** 월별 오더 수행 통계 데이터 조회 */
  adm0010GetOrderMonthLastDayStatistics: Entity_Adm0010_Result;
  /** 월별 센타 통계 데이터 조회 */
  adm0010GetCenterMonthLastDayStatistics: Entity_Adm0010_Result;
  /** 월별  통계 데이터 조회 */
  adm0010GetMonthLastDayStatistics: Entity_Adm0010_Result;
  /** 월오더합 리스트 통계 데이터 조회 */
  adm0010GetOrderMonthListStatistics: Entity_Adm0010_Week_Result;
  /** 월센터 마지막 날자 리스트 통계 데이터 조회 */
  adm0010GetCenterMonthLastDayListStatistics: Entity_Adm0010_Week_Result;
  /** 월 마지막 날자 리스트 통계 데이터 조회 */
  adm0010GetMonthLastDayListStatistics: Entity_Adm0010_Week_Result;
  /** 월별 통계 데이터 조회 */
  adm0010GetMonthPieStatistics: Entity_Adm0010_Pie_Result;
  /** 월별 통계 데이터 조회 */
  adm0010GetCenterMonthPieStatistic: Entity_Adm0010_Pie_Result;
  /** 월별 오더 통계 데이터 조회 */
  adm0010GetOrderMonthPieStatistics: Entity_Adm0010_Pie_Result;
  /** 영업일보 오더 조회 */
  adm0020GetOrderList: Entity_Adm0020_Result;
  /** 영업일보 지점 조회 */
  adm0020GetCenterList: Entity_Adm0020Center_Result;
  /** 영업일보 지점 조회 */
  adm0020GetShopList: Entity_Adm0020Center_Result;
  /** 영업일보 기사 조회 */
  adm0020GetRiderList: Entity_Adm0020Center_Result;
  /** 기간별 오더 조회 */
  adm0030GetOrderList: Entity_Adm0030_Result;
  /** 센터별 년기준 조회 */
  adm0040GetOrderList: Entity_Adm0040_Result;
  /** B2B 업체별 일일 주문 건수 조회 */
  adm0050GetOrderCountListByApiCom: Entity_Adm0050_Api_Com_Result;
  /** 지원 센터별 일일 주문 건수 조회 */
  adm0050GetOrderCountListByHelpCenter: Entity_Adm0050_Help_Center_Result;
  /** 공유콜 비율 조회 */
  adm0060GetShareCallRatioList: Entity_Adm0060_Result;
  /** 주문일 -7주 ~ 주문일 주의 첫번째 날짜들 */
  adm0070GetFirstDatesOfEightWeeks: Entity_Adm0070_First_Dates_Result;
  /** B2B 업체별 주간 주문 건수 조회 */
  adm0070GetWeeklyOrderCountListByApiCom: Entity_Adm0070_Api_Com_Weekly_Order_Count_Result;
  /** 지원 센터별 일일 주문 건수 조회 */
  adm0070GetWeeklyOrderCountListByHelpCenter: Entity_Adm0070_Help_Center_Weekly_Order_Count_Result;
  /** 일별 Membership 적립금 조회 */
  adm2010GetList: Entity_Adm2010_Result;
  /** 일별 Membership 적립금 상세(CCCODE) 조회 */
  adm2010GetDetailList: Entity_Adm2010Detail_Result;
  /** B2B 업체별 원천세 조회 */
  adm2020GetList: Entity_Adm2020_Result;
  /** B2B 기사별 원천세 조회 */
  adm2030GetList: Entity_Adm2030_Result;
  /** 더즌 은행별 입/출건수 및 예금주 확인 건수 조회 */
  adm2040GetList: Entity_Adm2040_Result;
  /** 지부수수료 내역 조회 */
  adm2050GetList: Entity_Adm2050_Result;
  /** B2B 업체별 원천세 조회 */
  adm2060GetList: Entity_Adm2060_Result;
  /** B2B 배송료 조회 */
  adm2070GetDeliveryFees: Entity_Adm2070_Delivery_Fee_Result;
  /** 법인 적립금 입출 조회 */
  adm2080GetList: Entity_Adm2080_Body_Result;
  /** 콜센타 적립금 잔액 조회 */
  adm3010GetList: Entity_Adm3010_Result;
  /** 가맹점 적립금 잔액 조회 */
  adm3011GetList: Entity_Adm3011_Result;
  /** 기사 적립금 잔액 조회 */
  adm3012GetList: Entity_Adm3012_Result;
  /** B2B 업체별 원천세 조회 */
  adm6010GetList: Entity_Adm6010_Result;
  /** B2B 업체별 원천세 조회 */
  adm6020GetList: Entity_Adm6020_Result;
  /** 안산 후정산 조회 */
  adm6310GetList: Entity_Adm6310_Result;
  /** 가맹점/기사 데이터 저장 이력 조회 */
  adm6320GetList: Entity_Adm6320_Result;
  /** 가맹점/기사 데이터 저장 이력 조회 */
  adm6330GetList: Entity_Adm6330_Result;
  /** 가맹점/기사 데이터 저장 이력 조회 */
  adm6340GetList: Entity_Adm6340_Result;
  /** 가맹점/기사 데이터 저장 이력 조회 */
  adm6350GetList: Entity_Adm6350_Result;
  /** 기사적립금차감 */
  adm6360GetList: Entity_Adm6360_Result;
  /** 기사상세조회 */
  adm6360GetRiderInfo: Entity_Riderinfo_Result;
  /** 입금 처리 기준 지점 미정산 내역 조회 */
  adm6370GetList: Entity_Adm6370_Result;
  /** (대여금용)지점 정보 조회 */
  adm6380GetCenterInfo: Entity_Adm6380_Result;
  /** (대여금용)오더 정보 조회 */
  adm6380GetOrderInfo: Entity_Adm6380OrderInfo_Result;
  /** (대여금용)2. 수익 분석 조회   3개월 가맹비 수익 및 기사 건당 처리비 수익 */
  adm6380GetRevenue13: Entity_Adm6380Revenue_Result;
  /** (대여금용)2. 수익 분석 조회  최근 1개월 가맹비 수익 및 기사 건당 처리비 수익 */
  adm6380GetRevenue11: Entity_Adm6380Revenue_Result;
  /** (대여금용)2. 수익 분석 조회  3) 지점장 콜 수행 수익(cid) - 건당처리비 수익 3개월 */
  adm6380GetRevenue33: Entity_Adm6380RevenueOwner_Result;
  /** (대여금용)2. 수익 분석 조회  3) 지점장 콜 수행 수익(cid) - 건당처리비 수익 최근 1개월 */
  adm6380GetRevenue31: Entity_Adm6380RevenueOwner_Result;
  /** (대여금용)2. 수익 분석 조회  3) 지점장 콜 수행 수익(cid) - 건당처리비 수익 최근 1개월 */
  adm6380GetOutlay: Entity_Adm6380Outlay_Result;
  /** B2B 매장별 콜현황 */
  adm6390GetList: Entity_Adm6390_Body_Result;
  /** 지점별 앱 업데이트 설정 리스트 */
  adm7010GetCallcenterUpdateList: Entity_Adm7010_Callcenter_Update_List_Result;
  /** 지점별 앱 업데이트 설정 리스트 */
  adm7010GetUpdateDefineList: Entity_Adm7010_Update_Define_List_Result;
  /** 기사 실명인증 리스트 */
  adm7020GetRiderConfirmList: Entity_Adm7020_Rider_Confirm_List_Result;
  /** 기사앱 지지기 체크 설정/전투콜 사용여부 설정 리스트 */
  adm7030GetRiderEtcConfigList: Entity_Adm7030_Get_Rider_Etc_Config_List_Result;
  /** 주문번호에 대한 카드결제 내역 리스트  */
  adm7040GetCardResultList: Entity_Adm7040_Get_Card_Result_List_Result;
  /** API 부가설정 리스트 */
  adm7050GetApiComDetailList: Entity_Adm7050_Get_Api_Com_Detail_List_Result;
  /** 마스터(그룹)코드 리스트  */
  adm7060GetMasterCodeList: Entity_Adm7060_Get_Master_Code_List_Result;
  /** 상세코드 리스트  */
  adm7060GetCodeDetailList: Entity_Adm7060_Get_Code_Detail_List_Result;
  /** POI_INFO 리스트  */
  adm7070GetPoiInfoList: Entity_Adm7070_Get_Poi_Info_List_Result;
  /** 가맹점 멀티매핑 리스트  */
  adm7080GetMultiMappingList: Entity_Adm7080_Get_Multi_Mapping_List_Result;
  /** 콜센타 적립금 입출 조회 */
  adm8110GetList: Entity_Adm8110_Body_Result;
  /** 콜센타 적립금 입출 조회 */
  adm8120GetList: Entity_Adm8120_Body_Result;
  /** 웹 메뉴 조회 */
  adm9010GetWebMenuList: Entity_Adm9010_Get_Web_Menu_List_Result;
  /** 어드민웹 사용자 그룹 조회 */
  adm9020GetGroupList: Entity_Adm9020_Get_Group_List_Result;
  /** 메뉴권한 관리 - 메뉴 리스트 */
  adm9020GetMngMenuList: Entity_Adm9020_Get_Mng_Menu_List_Result;
  /** 메뉴권한 관리 - 그룹별 사용자 리스트 */
  adm9020GetMngMenuGroupUserList: Entity_Adm9020_Get_Mng_Menu_Group_User_List_Result;
  /** 업종 코드 리스트 */
  cdm0201GetItemCodes: Entity_Cdm0201_Item_Code_Result;
  /** 가맹점 멀티매핑 리스트  */
  cdm0601GetShopInfoList: Entity_Cdm0601_Shop_Info_List;
  /** 회원사별 콜카운트 리스트 */
  cdm0603GetCallCountMembershipList: Entity_Cdm0603_Get_Callcount_Membership_List_Result;
  /** 회원사 일별 콜카운트 리스트 */
  cdm0604GetDayCntMembershipList: Entity_Cdm0604_Get_Day_Cnt_Membership_List_Result;
  /** API 정산 */
  cdm0615GetApiComCalculation: Entity_Cdm0615_Api_Com_Calculation_Result;
  /** API 접수 현황 */
  cdm0617GetApiComReceipt: Entity_Cdm0617_Api_Com_Receipt_Result;
  /** 지역별 기사/가맹점/콜 현황  */
  cdm0623GetShopInfoStatistics: Entity_Cdm0623_Shop_Statistics_Result;
};


export type QueryGetCallCenterTestListArgs = {
  CCCODE: Scalars['String'];
  MCODE: Scalars['String'];
};


export type QueryGetShopInfoTestListArgs = {
  ROW_COUNT: Scalars['Float'];
  SHOP_NAME: Scalars['String'];
  API_COM_GBN: Scalars['String'];
  JOB_GBN: Scalars['String'];
};


export type QueryGetStaticRiderWorkInfoTestArgs = {
  END_DATE: Scalars['String'];
  START_DATE: Scalars['String'];
  CCCODE: Scalars['String'];
  MCODE: Scalars['String'];
};


export type QueryGetMembershipListArgs = {
  HELP_CENTER?: Maybe<Scalars['String']>;
  GROUP_ID?: Maybe<Scalars['String']>;
};


export type QueryGetCallcenterListArgs = {
  CCCODE?: Maybe<Scalars['String']>;
  MCODE: Scalars['String'];
};


export type QueryGetMemberCallcenterListArgs = {
  MCODE?: Maybe<Scalars['String']>;
};


export type QueryGetCodeListArgs = {
  CD?: Maybe<Scalars['String']>;
  GROUP_CD: Scalars['String'];
};


export type QueryGetSalesManListArgs = {
  CCCODE: Scalars['String'];
};


export type QueryGetPopupCallcenterListArgs = {
  CCNAME?: Maybe<Scalars['String']>;
  CCCODE?: Maybe<Scalars['String']>;
  MCODE?: Maybe<Scalars['Float']>;
  HELP_CENTER?: Maybe<Scalars['String']>;
  PAGE_SIZE: Scalars['Float'];
  PAGE_NO: Scalars['Float'];
};


export type QueryGetPopupShopListArgs = {
  SHOP_NAME?: Maybe<Scalars['String']>;
  SHOP_CD?: Maybe<Scalars['String']>;
  CCCODE?: Maybe<Scalars['String']>;
  MCODE?: Maybe<Scalars['Float']>;
  HELP_CENTER?: Maybe<Scalars['String']>;
  PAGE_SIZE: Scalars['Float'];
  PAGE_NO: Scalars['Float'];
};


export type QueryGetShopItemInfoArgs = {
  JOB_GBN: Scalars['String'];
};


export type QueryGetApiComGbnListArgs = {
  CODE_GRP?: Maybe<Scalars['String']>;
};


export type QueryGetEtcCodeListArgs = {
  CODE_GRP: Scalars['String'];
  PGM_GROUP: Scalars['String'];
  MCODE: Scalars['Float'];
};


export type QueryGetPopupRiderListArgs = {
  PAGE_SIZE: Scalars['Float'];
  PAGE_NO: Scalars['Float'];
  USE_GBN?: Maybe<Scalars['String']>;
  EXCEPT_CONFIRM_YN?: Maybe<Scalars['String']>;
  MOBILE_CID?: Maybe<Scalars['String']>;
  RIDER_ID_NAME?: Maybe<Scalars['String']>;
  RIDER_CODE?: Maybe<Scalars['Float']>;
  WORK_GBN?: Maybe<Scalars['String']>;
  CCCODE?: Maybe<Scalars['String']>;
  MCODE?: Maybe<Scalars['Float']>;
  HELP_CENTER?: Maybe<Scalars['String']>;
};


export type QueryGetShopinfoListArgs = {
  CCCODE?: Maybe<Scalars['String']>;
};


export type QueryGetMenuAuthArgs = {
  MENU_URL: Scalars['String'];
};


export type QueryAdm0010GetDayStatisticsArgs = {
  STA_CODE: Scalars['String'];
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0010GetCenterDayStatisticArgs = {
  STA_CODE: Scalars['String'];
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0010GetWeekStatisticsArgs = {
  STA_CODE: Scalars['String'];
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0010GetCenterWeekStatisticsArgs = {
  STA_CODE: Scalars['String'];
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0010GetDayPieStatisticsArgs = {
  STA_CODE: Scalars['String'];
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0010GetCenterDayPieStatisticArgs = {
  STA_CODE: Scalars['String'];
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0010GetOrderMonthLastDayStatisticsArgs = {
  STA_CODE: Scalars['String'];
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0010GetCenterMonthLastDayStatisticsArgs = {
  STA_CODE: Scalars['String'];
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0010GetMonthLastDayStatisticsArgs = {
  STA_CODE: Scalars['String'];
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0010GetOrderMonthListStatisticsArgs = {
  STA_CODE: Scalars['String'];
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0010GetCenterMonthLastDayListStatisticsArgs = {
  STA_CODE: Scalars['String'];
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0010GetMonthLastDayListStatisticsArgs = {
  STA_CODE: Scalars['String'];
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0010GetMonthPieStatisticsArgs = {
  STA_CODE: Scalars['String'];
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0010GetCenterMonthPieStatisticArgs = {
  STA_CODE: Scalars['String'];
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0010GetOrderMonthPieStatisticsArgs = {
  STA_CODE: Scalars['String'];
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0020GetOrderListArgs = {
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0020GetCenterListArgs = {
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0020GetShopListArgs = {
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0020GetRiderListArgs = {
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0030GetOrderListArgs = {
  S_TYPE: Scalars['String'];
  TO_DATE: Scalars['String'];
  FR_DATE: Scalars['String'];
  CCCODE: Scalars['String'];
  MCODE: Scalars['String'];
  HELP_CENTER: Scalars['String'];
};


export type QueryAdm0040GetOrderListArgs = {
  CCCODE: Scalars['String'];
  MCODE: Scalars['String'];
  HELPCENTER: Scalars['String'];
  STYPE: Scalars['String'];
  ORDER_YEAR: Scalars['String'];
};


export type QueryAdm0050GetOrderCountListByApiComArgs = {
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0050GetOrderCountListByHelpCenterArgs = {
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0060GetShareCallRatioListArgs = {
  ORDER_YEAR: Scalars['String'];
};


export type QueryAdm0070GetFirstDatesOfEightWeeksArgs = {
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0070GetWeeklyOrderCountListByApiComArgs = {
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm0070GetWeeklyOrderCountListByHelpCenterArgs = {
  ORDER_DATE: Scalars['String'];
};


export type QueryAdm2010GetListArgs = {
  MCODE?: Maybe<Scalars['String']>;
  ARG_ORDER_DATE: Scalars['String'];
  HELP_CENTER?: Maybe<Scalars['String']>;
};


export type QueryAdm2010GetDetailListArgs = {
  MCODE: Scalars['String'];
  ARG_ORDER_DATE: Scalars['String'];
};


export type QueryAdm2020GetListArgs = {
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
};


export type QueryAdm2030GetListArgs = {
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
};


export type QueryAdm2040GetListArgs = {
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
};


export type QueryAdm2050GetListArgs = {
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
};


export type QueryAdm2060GetListArgs = {
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
  HELP_CENTER: Scalars['String'];
};


export type QueryAdm2070GetDeliveryFeesArgs = {
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
};


export type QueryAdm2080GetListArgs = {
  GBN: Scalars['String'];
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
};


export type QueryAdm3010GetListArgs = {
  ACC_GROUP_ID: Scalars['String'];
  GROUP_ID: Scalars['String'];
  AMT_GBN: Scalars['String'];
  C_USE_GBN: Scalars['String'];
  M_USE_GBN: Scalars['String'];
};


export type QueryAdm3011GetListArgs = {
  ACC_GROUP_ID: Scalars['String'];
  GROUP_ID: Scalars['String'];
  AMT_GBN: Scalars['String'];
  S_USE_GBN: Scalars['String'];
  C_USE_GBN: Scalars['String'];
  M_USE_GBN: Scalars['String'];
};


export type QueryAdm3012GetListArgs = {
  ACC_GROUP_ID: Scalars['String'];
  GROUP_ID: Scalars['String'];
  AMT_GBN: Scalars['String'];
  S_USE_GBN: Scalars['String'];
  C_USE_GBN: Scalars['String'];
  M_USE_GBN: Scalars['String'];
};


export type QueryAdm6010GetListArgs = {
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
  HELP_CENTER: Scalars['String'];
};


export type QueryAdm6020GetListArgs = {
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
  HELP_CENTER: Scalars['String'];
};


export type QueryAdm6310GetListArgs = {
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
  SEL_CODE: Scalars['String'];
};


export type QueryAdm6320GetListArgs = {
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
  CCCODE: Scalars['String'];
  MCODE: Scalars['String'];
  HELPCENTER: Scalars['String'];
};


export type QueryAdm6330GetListArgs = {
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
  HELP_CENTER: Scalars['String'];
  API_COM_GBN: Scalars['String'];
};


export type QueryAdm6340GetListArgs = {
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
  HELP_CENTER: Scalars['String'];
  API_COM_GBN: Scalars['String'];
};


export type QueryAdm6350GetListArgs = {
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
  HELP_CENTER: Scalars['String'];
  API_COM_GBN: Scalars['String'];
};


export type QueryAdm6360GetListArgs = {
  CID: Scalars['String'];
  RIDER_NAME: Scalars['String'];
  RIDER_CODE: Scalars['String'];
};


export type QueryAdm6360GetRiderInfoArgs = {
  RIDER_CODE: Scalars['String'];
};


export type QueryAdm6370GetListArgs = {
  USE_GBN: Scalars['String'];
  CENTER_TYPE: Scalars['String'];
  AMT_MOVE_GBN: Scalars['String'];
  ACC_GROUP_ID: Scalars['String'];
  GROUP_ID: Scalars['String'];
  CCCODE: Scalars['String'];
  MCODE: Scalars['String'];
  CALC_KIND: Scalars['String'];
  TO_DATE: Scalars['String'];
  FR_DATE: Scalars['String'];
};


export type QueryAdm6380GetCenterInfoArgs = {
  CCCODE: Scalars['String'];
};


export type QueryAdm6380GetOrderInfoArgs = {
  TO_DATE: Scalars['String'];
  FR_DATE: Scalars['String'];
  CCCODE: Scalars['String'];
};


export type QueryAdm6380GetRevenue13Args = {
  TO_DATE: Scalars['String'];
  FR_DATE: Scalars['String'];
  CCCODE: Scalars['String'];
};


export type QueryAdm6380GetRevenue11Args = {
  TO_DATE: Scalars['String'];
  FR_DATE: Scalars['String'];
  CCCODE: Scalars['String'];
};


export type QueryAdm6380GetRevenue33Args = {
  TO_DATE: Scalars['String'];
  FR_DATE: Scalars['String'];
  CCCODE: Scalars['String'];
};


export type QueryAdm6380GetRevenue31Args = {
  TO_DATE: Scalars['String'];
  FR_DATE: Scalars['String'];
  CCCODE: Scalars['String'];
};


export type QueryAdm6380GetOutlayArgs = {
  TO_DATE: Scalars['String'];
  FR_DATE: Scalars['String'];
  CCCODE: Scalars['String'];
};


export type QueryAdm6390GetListArgs = {
  API_COM_GBN: Scalars['String'];
  FROM_DATE: Scalars['String'];
};


export type QueryAdm7010GetCallcenterUpdateListArgs = {
  PAGE_SIZE: Scalars['Float'];
  PAGE_NO: Scalars['Float'];
};


export type QueryAdm7010GetUpdateDefineListArgs = {
  PAGE_SIZE: Scalars['Float'];
  PAGE_NO: Scalars['Float'];
};


export type QueryAdm7020GetRiderConfirmListArgs = {
  CID?: Maybe<Scalars['String']>;
  RIDER_REAL_NAME?: Maybe<Scalars['String']>;
  RIDER_NAME?: Maybe<Scalars['String']>;
  RIDER_CODE?: Maybe<Scalars['Float']>;
  CCCODE?: Maybe<Scalars['String']>;
  MCODE?: Maybe<Scalars['Float']>;
  PAGE_SIZE: Scalars['Float'];
  PAGE_NO: Scalars['Float'];
};


export type QueryAdm7030GetRiderEtcConfigListArgs = {
  CCNAME?: Maybe<Scalars['String']>;
  MCODE?: Maybe<Scalars['Float']>;
  PAGE_SIZE: Scalars['Float'];
  PAGE_NO: Scalars['Float'];
};


export type QueryAdm7040GetCardResultListArgs = {
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
  SEARCH_NO: Scalars['String'];
};


export type QueryAdm7050GetApiComDetailListArgs = {
  USE_GBN: Scalars['String'];
  API_COM_GBN: Scalars['String'];
  API_GUBUN: Scalars['String'];
  PAGE_SIZE: Scalars['Float'];
  PAGE_NO: Scalars['Float'];
};


export type QueryAdm7060GetMasterCodeListArgs = {
  GROUP_NM: Scalars['String'];
  GROUP_CD: Scalars['String'];
};


export type QueryAdm7060GetCodeDetailListArgs = {
  GROUP_CD: Scalars['String'];
};


export type QueryAdm7070GetPoiInfoListArgs = {
  PAGE_SIZE: Scalars['Float'];
  PAGE_NO: Scalars['Float'];
  PROC_TIME_SORT: Scalars['String'];
  ISRT_TIME_SORT: Scalars['String'];
  GET_CNT_SORT: Scalars['String'];
  SET_CNT_SORT: Scalars['String'];
  DONG: Scalars['String'];
  GUNGU: Scalars['String'];
  SIDO: Scalars['String'];
  POI_ADDR: Scalars['String'];
  END_DT: Scalars['String'];
  START_DT: Scalars['String'];
  POI_GBN: Scalars['String'];
  ISRT_TYPE: Scalars['String'];
  PROC_GBN: Scalars['String'];
};


export type QueryAdm7080GetMultiMappingListArgs = {
  PAGE_SIZE: Scalars['Float'];
  PAGE_NO: Scalars['Float'];
  COM_GBN_SORT?: Maybe<Scalars['String']>;
  SHOP_NAME_SORT?: Maybe<Scalars['String']>;
  ACC_YN?: Maybe<Scalars['String']>;
  USE_GBN?: Maybe<Scalars['String']>;
  API_COM_CODE?: Maybe<Scalars['String']>;
  API_COM_GBN?: Maybe<Scalars['String']>;
  SHOP_NAME?: Maybe<Scalars['String']>;
  SHOP_CD?: Maybe<Scalars['String']>;
  CCNAME?: Maybe<Scalars['String']>;
  CCCODE?: Maybe<Scalars['String']>;
  MCODE?: Maybe<Scalars['Float']>;
  HELP_CENTER?: Maybe<Scalars['String']>;
};


export type QueryAdm8110GetListArgs = {
  PAGE_SIZE?: Maybe<Scalars['Float']>;
  PAGE_NO?: Maybe<Scalars['Float']>;
  CHARGE_GBN: Scalars['String'];
  IO_GBN: Scalars['String'];
  CCCODE: Scalars['String'];
  MCODE: Scalars['String'];
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
};


export type QueryAdm8120GetListArgs = {
  PAGE_SIZE?: Maybe<Scalars['Float']>;
  PAGE_NO?: Maybe<Scalars['Float']>;
  MEMO?: Maybe<Scalars['String']>;
  CHARGE_GBN?: Maybe<Scalars['String']>;
  IO_GBN?: Maybe<Scalars['String']>;
  SHOP_CD: Scalars['String'];
  CCCODE: Scalars['String'];
  MCODE: Scalars['String'];
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
};


export type QueryAdm9010GetWebMenuListArgs = {
  SORT_SEQ_SORT?: Maybe<Scalars['String']>;
  PAGE_SIZE?: Maybe<Scalars['Float']>;
  PAGE_NO?: Maybe<Scalars['Float']>;
  USE_YN?: Maybe<Scalars['String']>;
  MENU_ID_OR_NAME?: Maybe<Scalars['String']>;
  WEB_GROUP?: Maybe<Scalars['String']>;
};


export type QueryAdm9020GetGroupListArgs = {
  PAGE_SIZE?: Maybe<Scalars['Float']>;
  PAGE_NO?: Maybe<Scalars['Float']>;
  GROUP_ID_OR_NAME?: Maybe<Scalars['String']>;
  GROUP_CODE?: Maybe<Scalars['String']>;
  WEB_GROUP?: Maybe<Scalars['String']>;
};


export type QueryAdm9020GetMngMenuListArgs = {
  GROUP_ID?: Maybe<Scalars['String']>;
  WEB_GROUP?: Maybe<Scalars['String']>;
};


export type QueryAdm9020GetMngMenuGroupUserListArgs = {
  USER_ID_NAME?: Maybe<Scalars['String']>;
  GROUP_ID: Scalars['String'];
  WEB_GROUP: Scalars['String'];
  PAGE_SIZE: Scalars['Float'];
  PAGE_NO: Scalars['Float'];
};


export type QueryCdm0601GetShopInfoListArgs = {
  PAGE_SIZE: Scalars['Float'];
  PAGE_NO: Scalars['Float'];
  CALL_CENTER_TYPE?: Maybe<Scalars['String']>;
  GROUP_ID?: Maybe<Scalars['String']>;
  HELP_CENTER_ID?: Maybe<Scalars['String']>;
  CCCODE?: Maybe<Scalars['String']>;
  MCODE?: Maybe<Scalars['Float']>;
};


export type QueryCdm0603GetCallCountMembershipListArgs = {
  END_DT?: Maybe<Scalars['String']>;
  START_DT?: Maybe<Scalars['String']>;
  CENTER_TYPE?: Maybe<Scalars['String']>;
  HELP_CENTER?: Maybe<Scalars['String']>;
  GROUP_ID?: Maybe<Scalars['String']>;
  CCCODE?: Maybe<Scalars['String']>;
  MCODE?: Maybe<Scalars['Float']>;
};


export type QueryCdm0604GetDayCntMembershipListArgs = {
  END_DT?: Maybe<Scalars['String']>;
  START_DT?: Maybe<Scalars['String']>;
  CENTER_TYPE?: Maybe<Scalars['String']>;
  HELP_CENTER?: Maybe<Scalars['String']>;
  GROUP_ID?: Maybe<Scalars['String']>;
  CCCODE?: Maybe<Scalars['String']>;
  MCODE?: Maybe<Scalars['Float']>;
};


export type QueryCdm0615GetApiComCalculationArgs = {
  PAGE_SIZE: Scalars['Float'];
  PAGE_NO: Scalars['Float'];
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
  ORDER_NO_OR_RIDER_NAME?: Maybe<Scalars['String']>;
  HCCODE?: Maybe<Scalars['String']>;
  ORDER_STATUS?: Maybe<Scalars['String']>;
  CCTYPE?: Maybe<Scalars['String']>;
  CCCODE?: Maybe<Scalars['String']>;
  MCODE?: Maybe<Scalars['Float']>;
  API_COM_CODE?: Maybe<Scalars['String']>;
  GROUP_ID?: Maybe<Scalars['String']>;
};


export type QueryCdm0617GetApiComReceiptArgs = {
  PAGE_SIZE: Scalars['Float'];
  PAGE_NO: Scalars['Float'];
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
  IS_INSUNG_YN: Scalars['String'];
  ORDER_NO_OR_RIDER_NAME?: Maybe<Scalars['String']>;
  HCCODE?: Maybe<Scalars['String']>;
  ORDER_STATUS?: Maybe<Scalars['String']>;
  CCTYPE?: Maybe<Scalars['String']>;
  CCCODE?: Maybe<Scalars['String']>;
  MCODE?: Maybe<Scalars['Float']>;
  API_COM_CODE?: Maybe<Scalars['String']>;
  GROUP_ID?: Maybe<Scalars['String']>;
};


export type QueryCdm0623GetShopInfoStatisticsArgs = {
  PAGE_SIZE: Scalars['Float'];
  PAGE_NO: Scalars['Float'];
  TO_DATE: Scalars['String'];
  FROM_DATE: Scalars['String'];
  HCCODE?: Maybe<Scalars['String']>;
  CCOPERATION?: Maybe<Scalars['String']>;
  CCTYPE?: Maybe<Scalars['String']>;
  CCNAME?: Maybe<Scalars['String']>;
  CCCODE?: Maybe<Scalars['String']>;
  MCODE?: Maybe<Scalars['Float']>;
};

export type Entity_Callcenter_Test_Result = {
  __typename?: 'ENTITY_CALLCENTER_TEST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Callcenter_Test>>;
};

export type Entity_Callcenter_Test = {
  __typename?: 'ENTITY_CALLCENTER_TEST';
  CCCODE: Scalars['ID'];
  MCODE: Scalars['String'];
  CCNAME?: Maybe<Scalars['String']>;
  CLEVEL?: Maybe<Scalars['String']>;
  ADDR1?: Maybe<Scalars['String']>;
  ADDR2?: Maybe<Scalars['String']>;
};

export type Entity_Result = {
  __typename?: 'ENTITY_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
};

export type Entity_Session_User_Test_Result = {
  __typename?: 'ENTITY_SESSION_USER_TEST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Session_User_Test>>;
};

export type Entity_Session_User_Test = {
  __typename?: 'ENTITY_SESSION_USER_TEST';
  USER_ID: Scalars['String'];
  USER_NAME: Scalars['String'];
  EMAIL: Scalars['String'];
};

export type Entity_Shop_Info_Test_Result = {
  __typename?: 'ENTITY_SHOP_INFO_TEST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Shop_Info_Proc_Out_Test>>;
};

export type Entity_Shop_Info_Proc_Out_Test = {
  __typename?: 'ENTITY_SHOP_INFO_PROC_OUT_TEST';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_SHOP_LIST_RESULT?: Maybe<Array<Entity_Shop_Info_Test>>;
};

export type Entity_Shop_Info_Test = {
  __typename?: 'ENTITY_SHOP_INFO_TEST';
  MCODE: Scalars['String'];
  MNAME: Scalars['String'];
  CCCODE: Scalars['String'];
  CCNAME: Scalars['String'];
  SHOP_CD: Scalars['String'];
  ITEM_CD: Scalars['String'];
  TELNO: Scalars['String'];
  ADDR: Scalars['String'];
  LON: Scalars['String'];
  LAT: Scalars['String'];
  SHOP_NAME: Scalars['String'];
  REG_NO: Scalars['String'];
  MOBILE: Scalars['String'];
  OPEN_TIME: Scalars['String'];
  CLOSE_TIME: Scalars['String'];
  REMAIN_AMT: Scalars['Float'];
  BANK_CODE: Scalars['String'];
  BANK_ACCOUNT: Scalars['Float'];
  REMAIN_GBN: Scalars['String'];
  COOK_WAIT_TIME: Scalars['Float'];
  API_COM_CODE1: Scalars['String'];
};

export type Entity_User_Test_Result = {
  __typename?: 'ENTITY_USER_TEST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_User_Test>>;
};

export type Entity_User_Test = {
  __typename?: 'ENTITY_USER_TEST';
  UCODE: Scalars['ID'];
  CCCODE: Scalars['String'];
  USER_NAME?: Maybe<Scalars['String']>;
  USER_ID?: Maybe<Scalars['String']>;
  USER_PASS_EN?: Maybe<Scalars['String']>;
};

export type Entity_Qorder_Test_Result = {
  __typename?: 'ENTITY_QORDER_TEST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Qorder_Test>>;
};

export type Entity_Qorder_Test = {
  __typename?: 'ENTITY_QORDER_TEST';
  ORDER_NO: Scalars['ID'];
  CCCODE: Scalars['String'];
  SHOP_NAME?: Maybe<Scalars['String']>;
  STATUS?: Maybe<Scalars['String']>;
  START_TELNO?: Maybe<Scalars['String']>;
};

export type Entity_Static_Rider_Work_Info_Test_Result = {
  __typename?: 'ENTITY_STATIC_RIDER_WORK_INFO_TEST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Static_Rider_Work_Info_Test>>;
};

export type Entity_Static_Rider_Work_Info_Test = {
  __typename?: 'ENTITY_STATIC_RIDER_WORK_INFO_TEST';
  RIDER_CODE: Scalars['ID'];
  RIDER_ID: Scalars['Float'];
  RIDER_NAME?: Maybe<Scalars['String']>;
  ATTEND_CNT?: Maybe<Scalars['Int']>;
  WORK_CNT?: Maybe<Scalars['Int']>;
  D01?: Maybe<Scalars['Int']>;
  D02?: Maybe<Scalars['Int']>;
  D03?: Maybe<Scalars['Int']>;
  D04?: Maybe<Scalars['Int']>;
  D05?: Maybe<Scalars['Int']>;
  D06?: Maybe<Scalars['Int']>;
  D07?: Maybe<Scalars['Int']>;
  D08?: Maybe<Scalars['Int']>;
  D09?: Maybe<Scalars['Int']>;
  D10?: Maybe<Scalars['Int']>;
  D11?: Maybe<Scalars['Int']>;
  D12?: Maybe<Scalars['Int']>;
  D13?: Maybe<Scalars['Int']>;
  D14?: Maybe<Scalars['Int']>;
  D15?: Maybe<Scalars['Int']>;
  D16?: Maybe<Scalars['Int']>;
  D17?: Maybe<Scalars['Int']>;
  D18?: Maybe<Scalars['Int']>;
  D19?: Maybe<Scalars['Int']>;
  D20?: Maybe<Scalars['Int']>;
  D21?: Maybe<Scalars['Int']>;
  D22?: Maybe<Scalars['Int']>;
  D23?: Maybe<Scalars['Int']>;
  D24?: Maybe<Scalars['Int']>;
  D25?: Maybe<Scalars['Int']>;
  D26?: Maybe<Scalars['Int']>;
  D27?: Maybe<Scalars['Int']>;
  D28?: Maybe<Scalars['Int']>;
  D29?: Maybe<Scalars['Int']>;
  D30?: Maybe<Scalars['Int']>;
  D31?: Maybe<Scalars['Int']>;
  A01?: Maybe<Scalars['Int']>;
  A02?: Maybe<Scalars['Int']>;
  A03?: Maybe<Scalars['Int']>;
  A04?: Maybe<Scalars['Int']>;
  A05?: Maybe<Scalars['Int']>;
  A06?: Maybe<Scalars['Int']>;
  A07?: Maybe<Scalars['Int']>;
  A08?: Maybe<Scalars['Int']>;
  A09?: Maybe<Scalars['Int']>;
  A10?: Maybe<Scalars['Int']>;
  A11?: Maybe<Scalars['Int']>;
  A12?: Maybe<Scalars['Int']>;
  A13?: Maybe<Scalars['Int']>;
  A14?: Maybe<Scalars['Int']>;
  A15?: Maybe<Scalars['Int']>;
  A16?: Maybe<Scalars['Int']>;
  A17?: Maybe<Scalars['Int']>;
  A18?: Maybe<Scalars['Int']>;
  A19?: Maybe<Scalars['Int']>;
  A20?: Maybe<Scalars['Int']>;
  A21?: Maybe<Scalars['Int']>;
  A22?: Maybe<Scalars['Int']>;
  A23?: Maybe<Scalars['Int']>;
  A24?: Maybe<Scalars['Int']>;
  A25?: Maybe<Scalars['Int']>;
  A26?: Maybe<Scalars['Int']>;
  A27?: Maybe<Scalars['Int']>;
  A28?: Maybe<Scalars['Int']>;
  A29?: Maybe<Scalars['Int']>;
  A30?: Maybe<Scalars['Int']>;
  A31?: Maybe<Scalars['Int']>;
};

export type Entity_Group_Result = {
  __typename?: 'ENTITY_GROUP_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Group>>;
};

export type Entity_Group = {
  __typename?: 'ENTITY_GROUP';
  SODRT_SEQ: Scalars['Float'];
  GROUP_ID: Scalars['String'];
  GROUP_NAME: Scalars['String'];
};

export type Entity_Helpcenter_Result = {
  __typename?: 'ENTITY_HELPCENTER_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Helpcenter>>;
};

export type Entity_Helpcenter = {
  __typename?: 'ENTITY_HELPCENTER';
  SORT_SEQ: Scalars['Float'];
  CODE: Scalars['String'];
  CODE_NM: Scalars['String'];
  MEMO: Scalars['String'];
};

export type Entity_Membership_Result = {
  __typename?: 'ENTITY_MEMBERSHIP_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Membership>>;
};

export type Entity_Membership = {
  __typename?: 'ENTITY_MEMBERSHIP';
  MCODE: Scalars['String'];
  MNAME: Scalars['String'];
  MNAME2: Scalars['String'];
};

export type Entity_Callcenter_Result = {
  __typename?: 'ENTITY_CALLCENTER_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Callcenter>>;
};

export type Entity_Callcenter = {
  __typename?: 'ENTITY_CALLCENTER';
  MCODE: Scalars['String'];
  CCCODE: Scalars['String'];
  CCNAME: Scalars['String'];
  CLEVEL: Scalars['String'];
  CLEVEL_NM: Scalars['String'];
};

export type Entity_Callcenter_Type_Result = {
  __typename?: 'ENTITY_CALLCENTER_TYPE_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Callcenter_Type>>;
};

export type Entity_Callcenter_Type = {
  __typename?: 'ENTITY_CALLCENTER_TYPE';
  /** 콜센터 타입 코드 */
  CODE: Scalars['String'];
  /** 콜센터 타입 이름 */
  CODE_NM?: Maybe<Scalars['String']>;
  /** 메모 */
  MEMO?: Maybe<Scalars['String']>;
};

export type Entity_Member_Callcenter_Result = {
  __typename?: 'ENTITY_MEMBER_CALLCENTER_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Member_Callcenter>>;
};

export type Entity_Member_Callcenter = {
  __typename?: 'ENTITY_MEMBER_CALLCENTER';
  MCODE: Scalars['String'];
  CCCODE: Scalars['String'];
  CCNAME: Scalars['String'];
};

export type Entity_Code_Result = {
  __typename?: 'ENTITY_CODE_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Code>>;
};

export type Entity_Code = {
  __typename?: 'ENTITY_CODE';
  GROUP_CD: Scalars['String'];
  GROUP_NM: Scalars['String'];
  SORT_NO: Scalars['Float'];
  CD: Scalars['String'];
  CD_NM: Scalars['String'];
};

export type Entity_Userlevel_Result = {
  __typename?: 'ENTITY_USERLEVEL_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Userlevel>>;
};

export type Entity_Userlevel = {
  __typename?: 'ENTITY_USERLEVEL';
  CD: Scalars['String'];
  CD_NM: Scalars['String'];
};

export type Entity_Item_Mst_Result = {
  __typename?: 'ENTITY_ITEM_MST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Item_Mst>>;
};

export type Entity_Item_Mst = {
  __typename?: 'ENTITY_ITEM_MST';
  ITEM_CD: Scalars['String'];
  ITEM_NAME: Scalars['String'];
  ITEM_DESC: Scalars['String'];
  SORT_SEQ: Scalars['Float'];
};

export type Entity_Sales_Man_Result = {
  __typename?: 'ENTITY_SALES_MAN_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Sales_Man>>;
};

export type Entity_Sales_Man = {
  __typename?: 'ENTITY_SALES_MAN';
  UCODE: Scalars['String'];
  USER_ID: Scalars['String'];
  USER_NAME: Scalars['String'];
  SALES: Scalars['String'];
};

export type Entity_Popup_Callcenter_List_Result = {
  __typename?: 'ENTITY_POPUP_CALLCENTER_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Popup_Callcenter_List_Proc_Out>>;
};

export type Entity_Popup_Callcenter_List_Proc_Out = {
  __typename?: 'ENTITY_POPUP_CALLCENTER_LIST_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Popup_Callcenter_List>>;
};

export type Entity_Popup_Callcenter_List = {
  __typename?: 'ENTITY_POPUP_CALLCENTER_LIST';
  LIST_NUM: Scalars['Float'];
  TOTAL_COUNT: Scalars['Float'];
  ROW_NUM: Scalars['Float'];
  MCODE: Scalars['String'];
  MNAME?: Maybe<Scalars['String']>;
  CCCODE: Scalars['String'];
  CCNAME?: Maybe<Scalars['String']>;
  TELNO?: Maybe<Scalars['String']>;
  CLEVEL?: Maybe<Scalars['String']>;
};

export type Entity_Popup_Shop_List_Result = {
  __typename?: 'ENTITY_POPUP_SHOP_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Popup_Shop_List_Proc_Out>>;
};

export type Entity_Popup_Shop_List_Proc_Out = {
  __typename?: 'ENTITY_POPUP_SHOP_LIST_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Popup_Shop_List>>;
};

export type Entity_Popup_Shop_List = {
  __typename?: 'ENTITY_POPUP_SHOP_LIST';
  LIST_NUM: Scalars['Float'];
  TOTAL_COUNT: Scalars['Float'];
  ROW_NUM: Scalars['Float'];
  HELP_CENTER?: Maybe<Scalars['String']>;
  MCODE?: Maybe<Scalars['String']>;
  CCCODE?: Maybe<Scalars['String']>;
  CCNAME?: Maybe<Scalars['String']>;
  SHOP_CD?: Maybe<Scalars['String']>;
  SHOP_NAME?: Maybe<Scalars['String']>;
  OWNER?: Maybe<Scalars['String']>;
  TELNO?: Maybe<Scalars['String']>;
  MOBILE?: Maybe<Scalars['String']>;
};

export type Entity_Bank_Result = {
  __typename?: 'ENTITY_BANK_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Bank>>;
};

export type Entity_Bank = {
  __typename?: 'ENTITY_BANK';
  BANKCODE: Scalars['String'];
  BANKNAME: Scalars['String'];
  ABLE_GBN: Scalars['String'];
};

export type Entity_Shop_Item_Result = {
  __typename?: 'ENTITY_SHOP_ITEM_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Shop_Item_Proc_Out>>;
};

export type Entity_Shop_Item_Proc_Out = {
  __typename?: 'ENTITY_SHOP_ITEM_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Shop_Item>>;
};

export type Entity_Shop_Item = {
  __typename?: 'ENTITY_SHOP_ITEM';
  ITEM_CD: Scalars['String'];
  ITEM_NAME: Scalars['String'];
  SORT_SEQ: Scalars['Float'];
};

export type Entity_Api_Com_Gbn_Result = {
  __typename?: 'ENTITY_API_COM_GBN_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Api_Com_Gbn>>;
};

export type Entity_Api_Com_Gbn = {
  __typename?: 'ENTITY_API_COM_GBN';
  CODE: Scalars['String'];
  CODE_NM: Scalars['String'];
  CODE_GRP: Scalars['String'];
};

export type Entity_Etc_Code_Result = {
  __typename?: 'ENTITY_ETC_CODE_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Etc_Code>>;
};

export type Entity_Etc_Code = {
  __typename?: 'ENTITY_ETC_CODE';
  CODE: Scalars['String'];
  CODE_NM: Scalars['String'];
};

export type Entity_Com_Gbn_Result = {
  __typename?: 'ENTITY_COM_GBN_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Com_Gbn_Proc_Out>>;
};

export type Entity_Com_Gbn_Proc_Out = {
  __typename?: 'ENTITY_COM_GBN_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Com_Gbn>>;
};

export type Entity_Com_Gbn = {
  __typename?: 'ENTITY_COM_GBN';
  CD: Scalars['String'];
  CD_NM: Scalars['String'];
  MEMO: Scalars['String'];
};

export type Entity_Get_Popup_Rider_List_Result = {
  __typename?: 'ENTITY_GET_POPUP_RIDER_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Get_Popup_Rider_List_Proc_Out>>;
};

export type Entity_Get_Popup_Rider_List_Proc_Out = {
  __typename?: 'ENTITY_GET_POPUP_RIDER_LIST_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Get_Popup_Rider_List>>;
};

export type Entity_Get_Popup_Rider_List = {
  __typename?: 'ENTITY_GET_POPUP_RIDER_LIST';
  LIST_NUM: Scalars['Float'];
  TOTAL_COUNT: Scalars['Float'];
  ROW_NUM: Scalars['Float'];
  RIDER_CODE: Scalars['Float'];
  MNAME?: Maybe<Scalars['String']>;
  MCODE?: Maybe<Scalars['String']>;
  CCCODE?: Maybe<Scalars['String']>;
  CCNAME?: Maybe<Scalars['String']>;
  RIDER_ID?: Maybe<Scalars['String']>;
  RIDER_NAME?: Maybe<Scalars['String']>;
  MOBILE?: Maybe<Scalars['String']>;
  CID?: Maybe<Scalars['String']>;
  WORK_GBN?: Maybe<Scalars['String']>;
  WORK_GBN_NAME?: Maybe<Scalars['String']>;
};

export type Entity_Shopinfo_Result = {
  __typename?: 'ENTITY_SHOPINFO_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Shopinfo>>;
};

export type Entity_Shopinfo = {
  __typename?: 'ENTITY_SHOPINFO';
  SHOP_CD: Scalars['String'];
  SHOP_NAME: Scalars['String'];
};

export type Entity_Login_Result = {
  __typename?: 'ENTITY_LOGIN_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Login>>;
};

export type Entity_Login = {
  __typename?: 'ENTITY_LOGIN';
  USER_ID: Scalars['String'];
  USER_NAME?: Maybe<Scalars['String']>;
  UCODE?: Maybe<Scalars['String']>;
  USER_PASS?: Maybe<Scalars['String']>;
  USER_PASS_EN?: Maybe<Scalars['String']>;
  MCODE?: Maybe<Scalars['String']>;
  USER_LEVEL?: Maybe<Scalars['String']>;
  CALLBACK_TELNO?: Maybe<Scalars['String']>;
  DDD?: Maybe<Scalars['String']>;
  ORDER_DATE?: Maybe<Scalars['String']>;
  ORDETODAY_DATER_DATE?: Maybe<Scalars['String']>;
  GROUP_ID?: Maybe<Scalars['String']>;
  CALLCENTER_GROUP_ID?: Maybe<Scalars['String']>;
  ACC_CCCODE?: Maybe<Scalars['String']>;
  HELP_CENTER?: Maybe<Scalars['String']>;
  ACC_GROUP_ID?: Maybe<Scalars['String']>;
  WORKING?: Maybe<Scalars['String']>;
  CLEVEL?: Maybe<Scalars['String']>;
  CCCODE?: Maybe<Scalars['String']>;
  CCNAME?: Maybe<Scalars['String']>;
  GROUP_MCODE?: Maybe<Scalars['String']>;
};

export type Entity_Util_Result = {
  __typename?: 'ENTITY_UTIL_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Util>>;
};

export type Entity_Util = {
  __typename?: 'ENTITY_UTIL';
  SERVER_TIME: Scalars['String'];
};

export type Entity_Menu_List_Result = {
  __typename?: 'ENTITY_MENU_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Menu_List_Proc_Out>>;
};

export type Entity_Menu_List_Proc_Out = {
  __typename?: 'ENTITY_MENU_LIST_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Menu_List>>;
};

export type Entity_Menu_List = {
  __typename?: 'ENTITY_MENU_LIST';
  MENU_ID: Scalars['String'];
  MENU_NAME?: Maybe<Scalars['String']>;
  URL?: Maybe<Scalars['String']>;
  MENU_TYPE?: Maybe<Scalars['String']>;
  ICON?: Maybe<Scalars['String']>;
  P_MENU_ID?: Maybe<Scalars['String']>;
  LEVEL?: Maybe<Scalars['Float']>;
};

export type Entity_Menu_Auth_Result = {
  __typename?: 'ENTITY_MENU_AUTH_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Menu_Auth_Proc_Out>>;
};

export type Entity_Menu_Auth_Proc_Out = {
  __typename?: 'ENTITY_MENU_AUTH_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Menu_Auth>>;
};

export type Entity_Menu_Auth = {
  __typename?: 'ENTITY_MENU_AUTH';
  MENU_ID: Scalars['String'];
  DEFAULT_URL?: Maybe<Scalars['String']>;
  AUTH_GUBUN?: Maybe<Scalars['String']>;
};

export type Entity_Adm0010_Result = {
  __typename?: 'ENTITY_adm0010_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0010>>;
};

export type Entity_Adm0010 = {
  __typename?: 'ENTITY_adm0010';
  TODAY?: Maybe<Scalars['Float']>;
  YESTERDAY?: Maybe<Scalars['Float']>;
  CALC?: Maybe<Scalars['Float']>;
};

export type Entity_Adm0010_Week_Result = {
  __typename?: 'ENTITY_adm0010_week_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0010_Week>>;
};

export type Entity_Adm0010_Week = {
  __typename?: 'ENTITY_adm0010_week';
  ORDER_DATE: Scalars['String'];
  RES: Scalars['Float'];
};

export type Entity_Adm0010_Order_Result = {
  __typename?: 'ENTITY_adm0010_order_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0010_Order>>;
};

export type Entity_Adm0010_Order = {
  __typename?: 'ENTITY_adm0010_order';
  ORDER_DATE: Scalars['String'];
};

export type Entity_Adm0010_Pie_Result = {
  __typename?: 'ENTITY_adm0010_pie_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0010_Pie>>;
};

export type Entity_Adm0010_Pie = {
  __typename?: 'ENTITY_adm0010_pie';
  HELP_CENTER?: Maybe<Scalars['String']>;
  RES: Scalars['Float'];
  HELP_NM?: Maybe<Scalars['String']>;
};

export type Entity_Adm0020_Result = {
  __typename?: 'ENTITY_adm0020_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0020>>;
};

export type Entity_Adm0020 = {
  __typename?: 'ENTITY_adm0020';
  HELP_CENTER?: Maybe<Scalars['String']>;
  CENTER_NM?: Maybe<Scalars['String']>;
  BM_CNT?: Maybe<Scalars['Float']>;
  YD_CNT?: Maybe<Scalars['Float']>;
  TD_CNT?: Maybe<Scalars['Float']>;
  MON_CNT?: Maybe<Scalars['Float']>;
  DEDUTION?: Maybe<Scalars['Float']>;
  ACCUMULATE?: Maybe<Scalars['Float']>;
};

export type Entity_Adm0020Center_Result = {
  __typename?: 'ENTITY_adm0020Center_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0020Center>>;
};

export type Entity_Adm0020Center = {
  __typename?: 'ENTITY_adm0020Center';
  HELP_CENTER?: Maybe<Scalars['String']>;
  CENTER_NM?: Maybe<Scalars['String']>;
  BM_CNT?: Maybe<Scalars['Float']>;
  BY_CNT?: Maybe<Scalars['Float']>;
  YD_CNT?: Maybe<Scalars['Float']>;
  TD_CNT?: Maybe<Scalars['Float']>;
  DEDUTION?: Maybe<Scalars['Float']>;
};

export type Entity_Adm0030_Result = {
  __typename?: 'ENTITY_adm0030_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0030>>;
};

export type Entity_Adm0030 = {
  __typename?: 'ENTITY_adm0030';
  DA?: Maybe<Scalars['String']>;
  S_CNT?: Maybe<Scalars['Float']>;
  C_CNT?: Maybe<Scalars['Float']>;
};

export type Entity_Adm0040_Result = {
  __typename?: 'ENTITY_adm0040_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0040>>;
};

export type Entity_Adm0040 = {
  __typename?: 'ENTITY_adm0040';
  HELP_CENTER?: Maybe<Scalars['String']>;
  CENTER_NM?: Maybe<Scalars['String']>;
  S01: Scalars['Float'];
  S02: Scalars['Float'];
  S03: Scalars['Float'];
  S04: Scalars['Float'];
  S05: Scalars['Float'];
  S06: Scalars['Float'];
  S07: Scalars['Float'];
  S08: Scalars['Float'];
  S09: Scalars['Float'];
  S10: Scalars['Float'];
  S11: Scalars['Float'];
  S12: Scalars['Float'];
};

export type Entity_Adm0050_Api_Com_Result = {
  __typename?: 'ENTITY_ADM0050_API_COM_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0050_Api_Com>>;
};

export type Entity_Adm0050_Api_Com = {
  __typename?: 'ENTITY_ADM0050_API_COM';
  API_COM_NAME: Scalars['String'];
  API_COM_CODE: Scalars['String'];
  D1: Scalars['String'];
  D2: Scalars['String'];
  D3: Scalars['String'];
  D4: Scalars['String'];
  D5: Scalars['String'];
  D6: Scalars['String'];
  D7: Scalars['String'];
};

export type Entity_Adm0050_Help_Center_Result = {
  __typename?: 'ENTITY_ADM0050_HELP_CENTER_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0050_Help_Center>>;
};

export type Entity_Adm0050_Help_Center = {
  __typename?: 'ENTITY_ADM0050_HELP_CENTER';
  HELP_CENTER_NAME?: Maybe<Scalars['String']>;
  HELP_CENTER_CODE?: Maybe<Scalars['String']>;
  D1: Scalars['String'];
  D2: Scalars['String'];
  D3: Scalars['String'];
  D4: Scalars['String'];
  D5: Scalars['String'];
  D6: Scalars['String'];
  D7: Scalars['String'];
};

export type Entity_Adm0060_Result = {
  __typename?: 'ENTITY_adm0060_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0060>>;
};

export type Entity_Adm0060 = {
  __typename?: 'ENTITY_adm0060';
  YY: Scalars['String'];
  CAL: Scalars['String'];
  M01?: Maybe<Scalars['String']>;
  M02?: Maybe<Scalars['String']>;
  M03?: Maybe<Scalars['String']>;
  M04?: Maybe<Scalars['String']>;
  M05?: Maybe<Scalars['String']>;
  M06?: Maybe<Scalars['String']>;
  M07?: Maybe<Scalars['String']>;
  M08?: Maybe<Scalars['String']>;
  M09?: Maybe<Scalars['String']>;
  M10?: Maybe<Scalars['String']>;
  M11?: Maybe<Scalars['String']>;
  M12?: Maybe<Scalars['String']>;
  TOT?: Maybe<Scalars['String']>;
};

export type Entity_Adm0070_First_Dates_Result = {
  __typename?: 'ENTITY_ADM0070_FIRST_DATES_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0070_First_Dates>>;
};

export type Entity_Adm0070_First_Dates = {
  __typename?: 'ENTITY_ADM0070_FIRST_DATES';
  FIRST_DATE: Scalars['String'];
};

export type Entity_Adm0070_Api_Com_Weekly_Order_Count_Result = {
  __typename?: 'ENTITY_ADM0070_API_COM_WEEKLY_ORDER_COUNT_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0070_Api_Com_Weekly_Order_Count>>;
};

export type Entity_Adm0070_Api_Com_Weekly_Order_Count = {
  __typename?: 'ENTITY_ADM0070_API_COM_WEEKLY_ORDER_COUNT';
  API_COM_NAME?: Maybe<Scalars['String']>;
  API_COM_CODE?: Maybe<Scalars['String']>;
  D1: Scalars['String'];
  D2: Scalars['String'];
  D3: Scalars['String'];
  D4: Scalars['String'];
  D5: Scalars['String'];
  D6: Scalars['String'];
  D7: Scalars['String'];
  D8: Scalars['String'];
};

export type Entity_Adm0070_Help_Center_Weekly_Order_Count_Result = {
  __typename?: 'ENTITY_ADM0070_HELP_CENTER_WEEKLY_ORDER_COUNT_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0070_Help_Center_Weekly_Order_Count>>;
};

export type Entity_Adm0070_Help_Center_Weekly_Order_Count = {
  __typename?: 'ENTITY_ADM0070_HELP_CENTER_WEEKLY_ORDER_COUNT';
  HELP_CENTER_NAME?: Maybe<Scalars['String']>;
  HELP_CENTER_CODE?: Maybe<Scalars['String']>;
  D1: Scalars['String'];
  D2: Scalars['String'];
  D3: Scalars['String'];
  D4: Scalars['String'];
  D5: Scalars['String'];
  D6: Scalars['String'];
  D7: Scalars['String'];
  D8: Scalars['String'];
};

export type Entity_Adm2010_Result = {
  __typename?: 'ENTITY_adm2010_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm2010>>;
};

export type Entity_Adm2010 = {
  __typename?: 'ENTITY_adm2010';
  ORDER_DATE: Scalars['String'];
  MNAME: Scalars['String'];
  MCODE: Scalars['String'];
  CINIT: Scalars['Float'];
  RINIT: Scalars['Float'];
  SINIT: Scalars['Float'];
  SUMINIT: Scalars['Float'];
};

export type Entity_Adm2010Detail_Result = {
  __typename?: 'ENTITY_adm2010Detail_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm2010Detail>>;
};

export type Entity_Adm2010Detail = {
  __typename?: 'ENTITY_adm2010Detail';
  ORDER_DATE: Scalars['String'];
  CCNAME: Scalars['String'];
  CCCODE: Scalars['String'];
  INIT_AMT: Scalars['Float'];
  USE_GBN: Scalars['String'];
};

export type Entity_Adm2020_Result = {
  __typename?: 'ENTITY_adm2020_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm2020>>;
};

export type Entity_Adm2020 = {
  __typename?: 'ENTITY_adm2020';
  APPCOMCODE: Scalars['String'];
  CODENM: Scalars['String'];
  TOTAL: Scalars['Float'];
  TAX: Scalars['Float'];
  LOCALTAX: Scalars['Float'];
  LOGIALL_TAX: Scalars['Float'];
};

export type Entity_Adm2030_Result = {
  __typename?: 'ENTITY_adm2030_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm2030>>;
};

export type Entity_Adm2030 = {
  __typename?: 'ENTITY_adm2030';
  RIDERNM?: Maybe<Scalars['String']>;
  REG_NO?: Maybe<Scalars['String']>;
  TOTAL: Scalars['Float'];
  TAX: Scalars['Float'];
  LOCALTAX: Scalars['Float'];
  LOGIALLTAX: Scalars['Float'];
};

export type Entity_Adm2040_Result = {
  __typename?: 'ENTITY_adm2040_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm2040>>;
};

export type Entity_Adm2040 = {
  __typename?: 'ENTITY_adm2040';
  BANKNAME: Scalars['String'];
  IO_CNT: Scalars['Float'];
  I_CNT: Scalars['Float'];
  O_CNT: Scalars['Float'];
  CHK_CNT: Scalars['Float'];
};

export type Entity_Adm2050_Result = {
  __typename?: 'ENTITY_adm2050_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm2050>>;
};

export type Entity_Adm2050 = {
  __typename?: 'ENTITY_adm2050';
  YYYYMM: Scalars['String'];
  HELP_CENTER: Scalars['String'];
  HELP_CENTER_NM: Scalars['String'];
  MCODE: Scalars['String'];
  MCODE_NM: Scalars['String'];
  RIDER_CCCODE: Scalars['String'];
  RIDER_CCCODE_NM: Scalars['String'];
  SUC_CODE: Scalars['Float'];
  MAIN_FEE: Scalars['Float'];
  UNIT_PRICE: Scalars['Float'];
};

export type Entity_Adm2060_Result = {
  __typename?: 'ENTITY_adm2060_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm2060>>;
};

export type Entity_Adm2060 = {
  __typename?: 'ENTITY_adm2060';
  ORDER_DATE: Scalars['String'];
  CALL_DATE: Scalars['String'];
  CHARGE_AMT: Scalars['Float'];
  CCNAME: Scalars['String'];
  CCCODE: Scalars['String'];
  CNT: Scalars['Float'];
  MEMO: Scalars['String'];
  HELP_CENTER: Scalars['String'];
  HELP_CENTER_NM: Scalars['String'];
};

export type Entity_Adm2070_Delivery_Fee_Result = {
  __typename?: 'ENTITY_ADM2070_DELIVERY_FEE_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm2070_Delivery_Fee>>;
};

export type Entity_Adm2070_Delivery_Fee = {
  __typename?: 'ENTITY_ADM2070_DELIVERY_FEE';
  /** B2B 업체명 */
  API_COM_NAME?: Maybe<Scalars['String']>;
  /** B2B 업체 코드 */
  API_COM_CODE: Scalars['String'];
  /** 완료 건수 */
  COMPLETE_COUNT: Scalars['Float'];
  /** 취소 건수 */
  CANCEL_COUNT: Scalars['Float'];
  /** 완료 정산 금액 */
  COMPLETE_CALCULATE_AMOUNT: Scalars['Float'];
  /** 취소 정산 금액 */
  CANCEL_CALCULATE_AMOUNT: Scalars['Float'];
  /** (완료 - 취소) 정산 금액 차액 */
  DIFFERENCE_AMOUNT: Scalars['Float'];
  /** 원천세 입금 */
  WITHHOLDING_TAX_INPUT: Scalars['Float'];
  /** 원천세 출금 */
  WITHHOLDING_TAX_OUTPUT: Scalars['Float'];
  /** 원천세 (입금 - 출금) 차액 */
  DIFFERENCE_WITHHOLDING_TAX: Scalars['Float'];
};

export type Entity_Adm2080_Body_Result = {
  __typename?: 'ENTITY_ADM2080_BODY_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm2080_Body>>;
};

export type Entity_Adm2080_Body = {
  __typename?: 'ENTITY_ADM2080_BODY';
  /** MCODE */
  MCODE: Scalars['String'];
  /** CCCODE */
  CCCODE: Scalars['String'];
  /** 센타명 */
  CCNAME: Scalars['String'];
  /** 이월 금액 */
  P_AMT: Scalars['Float'];
  /** 입금 금액 */
  I_AMT: Scalars['Float'];
  /** 출금 금액 */
  O_AMT: Scalars['Float'];
  /** (입금 - 출금) 잔액 */
  TOTAL: Scalars['Float'];
};

export type Entity_Adm3010_Result = {
  __typename?: 'ENTITY_adm3010_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm3010>>;
};

export type Entity_Adm3010 = {
  __typename?: 'ENTITY_adm3010';
  MCODE: Scalars['String'];
  MNAME?: Maybe<Scalars['String']>;
  CCCODE: Scalars['String'];
  CCNAME?: Maybe<Scalars['String']>;
  SHOP_CALC_GBN?: Maybe<Scalars['String']>;
  REMAIN_AMT?: Maybe<Scalars['Float']>;
  REG_NO?: Maybe<Scalars['String']>;
  GROUP_ID?: Maybe<Scalars['String']>;
  C_USE_GBN?: Maybe<Scalars['String']>;
  M_USE_GBN?: Maybe<Scalars['String']>;
  ROWNUM?: Maybe<Scalars['String']>;
};

export type Entity_Adm3011_Result = {
  __typename?: 'ENTITY_adm3011_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm3011>>;
};

export type Entity_Adm3011 = {
  __typename?: 'ENTITY_adm3011';
  MCODE: Scalars['String'];
  MNAME?: Maybe<Scalars['String']>;
  CCCODE: Scalars['String'];
  CCNAME?: Maybe<Scalars['String']>;
  SHOP_CALC_GBN?: Maybe<Scalars['String']>;
  SHOP_CD?: Maybe<Scalars['String']>;
  SHOP_NAME?: Maybe<Scalars['String']>;
  REG_NO?: Maybe<Scalars['String']>;
  REMAIN_MINUS_YN?: Maybe<Scalars['String']>;
  REMAIN_AMT?: Maybe<Scalars['Float']>;
  JOIN_REMAIN_AMT?: Maybe<Scalars['Float']>;
  GROUP_ID?: Maybe<Scalars['String']>;
  C_USE_GBN?: Maybe<Scalars['String']>;
  M_USE_GBN?: Maybe<Scalars['String']>;
  S_USE_GBN?: Maybe<Scalars['String']>;
  ROWNUM?: Maybe<Scalars['Float']>;
};

export type Entity_Adm3012_Result = {
  __typename?: 'ENTITY_adm3012_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm3012>>;
};

export type Entity_Adm3012 = {
  __typename?: 'ENTITY_adm3012';
  MCODE: Scalars['String'];
  MNAME?: Maybe<Scalars['String']>;
  CCCODE: Scalars['String'];
  CCNAME?: Maybe<Scalars['String']>;
  RIDER_CODE?: Maybe<Scalars['String']>;
  RIDER_ID?: Maybe<Scalars['String']>;
  RIDER_NAME?: Maybe<Scalars['String']>;
  CID?: Maybe<Scalars['String']>;
  REG_NO?: Maybe<Scalars['String']>;
  CHARGE_GBN?: Maybe<Scalars['String']>;
  REMAIN_AMT?: Maybe<Scalars['Float']>;
  WORK_GBN?: Maybe<Scalars['String']>;
  GROUP_ID?: Maybe<Scalars['String']>;
  M_USE_GBN?: Maybe<Scalars['String']>;
  C_USE_GBN?: Maybe<Scalars['String']>;
  ROWNUM?: Maybe<Scalars['Float']>;
};

export type Entity_Adm6010_Result = {
  __typename?: 'ENTITY_adm6010_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6010>>;
};

export type Entity_Adm6010 = {
  __typename?: 'ENTITY_adm6010';
  HELP_CENTER: Scalars['String'];
  HELP_CENTER_NM: Scalars['String'];
  TOT_CNT: Scalars['String'];
  COM_CNT: Scalars['Float'];
  CAN_CNT: Scalars['Float'];
  RUN_RIDER_CNT: Scalars['Float'];
  RUN_SHOP_CNT: Scalars['Float'];
  RUN_CCCODE_CNT: Scalars['Float'];
  TOT_SHOP_CNT: Scalars['Float'];
  TOT_RIDER_CNT: Scalars['Float'];
};

export type Entity_Adm6020_Result = {
  __typename?: 'ENTITY_adm6020_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6020>>;
};

export type Entity_Adm6020 = {
  __typename?: 'ENTITY_adm6020';
  HELP_CENTER: Scalars['String'];
  HELP_CENTER_NM: Scalars['String'];
  CCNAME: Scalars['String'];
  RIDER_NAME: Scalars['String'];
  RIDER_CODE: Scalars['String'];
  ORDER_TOT: Scalars['Float'];
  WORK_TOT: Scalars['Float'];
  RIDER_CBASIC_TOT: Scalars['Float'];
};

export type Entity_Adm6310_Result = {
  __typename?: 'ENTITY_adm6310_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6310>>;
};

export type Entity_Adm6310 = {
  __typename?: 'ENTITY_adm6310';
  CCCODE: Scalars['String'];
  CCNAME: Scalars['String'];
  RIDER_CCCODE: Scalars['String'];
  RIDER_CCNAME: Scalars['String'];
  CNT: Scalars['Float'];
  DD_CNT: Scalars['Float'];
};

export type Entity_Adm6320_Result = {
  __typename?: 'ENTITY_adm6320_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6320>>;
};

export type Entity_Adm6320 = {
  __typename?: 'ENTITY_adm6320';
  SEQNO: Scalars['String'];
  MNAME: Scalars['String'];
  CLEVEL?: Maybe<Scalars['String']>;
  HELP_CENTER?: Maybe<Scalars['String']>;
  HELP_NM?: Maybe<Scalars['String']>;
  CCNAME: Scalars['String'];
  USER_ID: Scalars['String'];
  USER_NAME: Scalars['String'];
  LOG_GBN: Scalars['String'];
  ISRT_DATE: Scalars['String'];
  MACADDRESS?: Maybe<Scalars['String']>;
  PC_NAME?: Maybe<Scalars['String']>;
  PC_IP?: Maybe<Scalars['String']>;
  PGM_ID?: Maybe<Scalars['String']>;
  PGM_NAME?: Maybe<Scalars['String']>;
  FILENAME?: Maybe<Scalars['String']>;
  FILEPATH?: Maybe<Scalars['String']>;
  ROWCOUNT: Scalars['Float'];
};

export type Entity_Adm6330_Result = {
  __typename?: 'ENTITY_adm6330_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6330>>;
};

export type Entity_Adm6330 = {
  __typename?: 'ENTITY_adm6330';
  HELP_NM: Scalars['String'];
  HELP_CD: Scalars['String'];
  MCODE: Scalars['String'];
  CCNAME: Scalars['String'];
  CCCODE: Scalars['String'];
  SHOP_CD: Scalars['String'];
  SHOP_NAME: Scalars['String'];
  T_CNT: Scalars['Float'];
  C_CNT: Scalars['Float'];
  C_RATE: Scalars['Float'];
  AJB_AVG: Scalars['Float'];
  JB_TIME: Scalars['String'];
  AJP_AVG?: Maybe<Scalars['Float']>;
  JP_TIME: Scalars['String'];
  AJC_AVG: Scalars['Float'];
  JC_TIME: Scalars['String'];
  AJB_CNT: Scalars['Float'];
  AJB_RATE: Scalars['Float'];
  AJC_CNT?: Maybe<Scalars['Float']>;
  AJC_RATE: Scalars['Float'];
  CNT2?: Maybe<Scalars['Float']>;
  AJP_AVG2?: Maybe<Scalars['Float']>;
  AJP_CNT2?: Maybe<Scalars['Float']>;
  AJB_RATE2?: Maybe<Scalars['Float']>;
  AJC_CNT2?: Maybe<Scalars['Float']>;
  AJC_RATE2?: Maybe<Scalars['Float']>;
  JP_TIME2?: Maybe<Scalars['String']>;
  CNT3?: Maybe<Scalars['Float']>;
  AJP_AVG3?: Maybe<Scalars['Float']>;
  AJP_CNT3?: Maybe<Scalars['Float']>;
  AJB_RATE3?: Maybe<Scalars['Float']>;
  AJC_CNT3?: Maybe<Scalars['Float']>;
  AJC_RATE3?: Maybe<Scalars['Float']>;
  JP_TIME3?: Maybe<Scalars['String']>;
};

export type Entity_Adm6340_Result = {
  __typename?: 'ENTITY_adm6340_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6340>>;
};

export type Entity_Adm6340 = {
  __typename?: 'ENTITY_adm6340';
  HELP_NM: Scalars['String'];
  HELP_CD: Scalars['String'];
  MCODE: Scalars['String'];
  MNAME: Scalars['String'];
  CCNAME: Scalars['String'];
  CCCODE: Scalars['String'];
  SHOP_CD: Scalars['String'];
  SHOP_NAME: Scalars['String'];
  CNT1: Scalars['Float'];
  CNT2: Scalars['Float'];
  CNT3: Scalars['Float'];
  CNT4: Scalars['Float'];
  CNT5: Scalars['Float'];
  CNT6?: Maybe<Scalars['Float']>;
  CNT7: Scalars['Float'];
  CNT8: Scalars['Float'];
  CNT9: Scalars['Float'];
  CNT10: Scalars['Float'];
  CNT_1: Scalars['Float'];
  CNT_2: Scalars['Float'];
  CNT_3: Scalars['Float'];
  RATE4: Scalars['Float'];
  RATE5: Scalars['Float'];
};

export type Entity_Adm6350_Result = {
  __typename?: 'ENTITY_adm6350_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6350>>;
};

export type Entity_Adm6350 = {
  __typename?: 'ENTITY_adm6350';
  HELP_NM: Scalars['String'];
  HELP_CD: Scalars['String'];
  MCODE: Scalars['String'];
  CCNAME?: Maybe<Scalars['String']>;
  CCCODE: Scalars['String'];
  SHOP_CD: Scalars['String'];
  SHOP_NAME: Scalars['String'];
  ORDER_DATE: Scalars['String'];
  DY: Scalars['String'];
  T_CNT: Scalars['Float'];
  C_CNT: Scalars['Float'];
  C_RATE: Scalars['Float'];
  AJB_AVG: Scalars['Float'];
  JB_TIME: Scalars['String'];
  AJP_AVG?: Maybe<Scalars['Float']>;
  JP_TIME: Scalars['String'];
  AJC_AVG: Scalars['Float'];
  JC_TIME: Scalars['String'];
  AJB_CNT: Scalars['Float'];
  AJB_RATE: Scalars['Float'];
  AJC_CNT?: Maybe<Scalars['Float']>;
  AJC_RATE: Scalars['Float'];
  CNT2?: Maybe<Scalars['Float']>;
  AJP_AVG2?: Maybe<Scalars['Float']>;
  AJP_CNT2?: Maybe<Scalars['Float']>;
  AJB_RATE2?: Maybe<Scalars['Float']>;
  AJC_CNT2?: Maybe<Scalars['Float']>;
  AJC_RATE2?: Maybe<Scalars['Float']>;
  JP_TIME2?: Maybe<Scalars['String']>;
  CNT3?: Maybe<Scalars['Float']>;
  AJP_AVG3?: Maybe<Scalars['Float']>;
  AJP_CNT3?: Maybe<Scalars['Float']>;
  AJB_RATE3?: Maybe<Scalars['Float']>;
  AJC_CNT3?: Maybe<Scalars['Float']>;
  AJC_RATE3?: Maybe<Scalars['Float']>;
  JP_TIME3?: Maybe<Scalars['String']>;
  CWT05: Scalars['Float'];
  CWT10: Scalars['Float'];
  CWT15: Scalars['Float'];
  CWT20: Scalars['Float'];
  CWT25: Scalars['Float'];
  CWT30: Scalars['Float'];
  CWT99: Scalars['Float'];
};

export type Entity_Adm6360_Result = {
  __typename?: 'ENTITY_adm6360_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6360>>;
};

export type Entity_Adm6360 = {
  __typename?: 'ENTITY_adm6360';
  HELP_CENTER_NM?: Maybe<Scalars['String']>;
  CCNAME: Scalars['String'];
  RIDER_CODE: Scalars['String'];
  CCCODE: Scalars['String'];
  RIDER_ID: Scalars['String'];
  RIDER_NAME: Scalars['String'];
  CID?: Maybe<Scalars['String']>;
  REMAIN_AMT: Scalars['Float'];
  HELP_CENTER?: Maybe<Scalars['String']>;
};

export type Entity_Riderinfo_Result = {
  __typename?: 'ENTITY_riderinfo_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Riderinfo>>;
};

export type Entity_Riderinfo = {
  __typename?: 'ENTITY_riderinfo';
  RIDER_CODE?: Maybe<Scalars['String']>;
  RIDER_ID: Scalars['String'];
  RIDER_NAME: Scalars['String'];
  CCCODE: Scalars['String'];
  CID?: Maybe<Scalars['String']>;
  REMAIN_AMT: Scalars['Float'];
};

export type Entity_Adm6370_Result = {
  __typename?: 'ENTITY_adm6370_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6370>>;
};

export type Entity_Adm6370 = {
  __typename?: 'ENTITY_adm6370';
  MCODE: Scalars['String'];
  O_MNAME: Scalars['String'];
  O_CCCODE: Scalars['String'];
  O_CCNAME: Scalars['String'];
  MINUS_SEQNO: Scalars['String'];
  SEQNO: Scalars['String'];
  ORDER_DATE: Scalars['String'];
  PLACE_GBN: Scalars['String'];
  CCCODE: Scalars['String'];
  SHOP_CD: Scalars['String'];
  RIDER_CODE: Scalars['String'];
  CALC_KIND?: Maybe<Scalars['String']>;
  CALC_GBN?: Maybe<Scalars['String']>;
  CALC_AMT: Scalars['Float'];
  START_DATE: Scalars['String'];
  END_DATE?: Maybe<Scalars['String']>;
  USE_GBN: Scalars['String'];
  MEMO?: Maybe<Scalars['String']>;
  RGST_UID?: Maybe<Scalars['String']>;
  RGST_DATE?: Maybe<Scalars['String']>;
  MOD_UID?: Maybe<Scalars['String']>;
  MOD_DATE?: Maybe<Scalars['String']>;
  AMT_MOVE_GBN: Scalars['String'];
  AMT_MOVE_CCCODE?: Maybe<Scalars['String']>;
  CC_GBN?: Maybe<Scalars['String']>;
  REMAIN_AMT: Scalars['String'];
  INS_DATE: Scalars['String'];
  PAY_AMT?: Maybe<Scalars['Float']>;
  PAY_DATE?: Maybe<Scalars['String']>;
  M_MNAME?: Maybe<Scalars['String']>;
  M_CCNAME?: Maybe<Scalars['String']>;
  MAIN_CCCODE?: Maybe<Scalars['String']>;
  IN_MCODE?: Maybe<Scalars['String']>;
  STATUS: Scalars['String'];
};

export type Entity_Adm6380_Result = {
  __typename?: 'ENTITY_adm6380_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6380>>;
};

export type Entity_Adm6380 = {
  __typename?: 'ENTITY_adm6380';
  CCCODE: Scalars['String'];
  MCODE?: Maybe<Scalars['String']>;
  CCNAME: Scalars['String'];
  USE_GBN: Scalars['String'];
  MOBILE?: Maybe<Scalars['String']>;
  OWNER?: Maybe<Scalars['String']>;
  PROGRAM_AMT: Scalars['Float'];
  CALL_AMT: Scalars['Float'];
  API_CALL_AMT: Scalars['Float'];
};

export type Entity_Adm6380OrderInfo_Result = {
  __typename?: 'ENTITY_adm6380OrderInfo_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6380OrderInfo>>;
};

export type Entity_Adm6380OrderInfo = {
  __typename?: 'ENTITY_adm6380OrderInfo';
  FR_DATE: Scalars['String'];
  TO_DATE: Scalars['String'];
  CNT: Scalars['Float'];
  GD_AVG_CNT: Scalars['Float'];
  DCNT: Scalars['Float'];
  D_AVG_CNT: Scalars['Float'];
  BM_SHOP: Scalars['Float'];
  LM_SHOP: Scalars['Float'];
  BM_RIDER: Scalars['Float'];
  LM_RIDER: Scalars['Float'];
};

export type Entity_Adm6380Revenue_Result = {
  __typename?: 'ENTITY_adm6380Revenue_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6380Revenue>>;
};

export type Entity_Adm6380Revenue = {
  __typename?: 'ENTITY_adm6380Revenue';
  SHOP_AMT: Scalars['Float'];
  RIDER_AMT: Scalars['Float'];
};

export type Entity_Adm6380RevenueOwner_Result = {
  __typename?: 'ENTITY_adm6380RevenueOwner_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6380RevenueOwner>>;
};

export type Entity_Adm6380RevenueOwner = {
  __typename?: 'ENTITY_adm6380RevenueOwner';
  AMT: Scalars['Float'];
};

export type Entity_Adm6380Outlay_Result = {
  __typename?: 'ENTITY_adm6380Outlay_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6380Outlay>>;
};

export type Entity_Adm6380Outlay = {
  __typename?: 'ENTITY_adm6380Outlay';
  L_IN_AMT: Scalars['Float'];
  L_OUT_AMT: Scalars['Float'];
  P_IN_AMT: Scalars['Float'];
  P_OUT_AMT: Scalars['Float'];
  CS_IN_AMT: Scalars['Float'];
  CS_OUT_AMT: Scalars['Float'];
  A_IN_AMT: Scalars['Float'];
  A_OUT_AMT: Scalars['Float'];
  I3_IN_AMT: Scalars['Float'];
  I3_OUT_AMT: Scalars['Float'];
  R1_IN_AMT: Scalars['Float'];
  R1_OUT_AMT: Scalars['Float'];
  S1_IN_AMT: Scalars['Float'];
  S1_OUT_AMT: Scalars['Float'];
};

export type Entity_Adm6390_Body_Result = {
  __typename?: 'ENTITY_ADM6390_BODY_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6390_Body>>;
};

export type Entity_Adm6390_Body = {
  __typename?: 'ENTITY_ADM6390_BODY';
  /** CCCODE */
  CCCODE: Scalars['String'];
  /** 센타명 */
  CCNAME?: Maybe<Scalars['String']>;
  /** 가맹점 코드 */
  SHOP_CD: Scalars['String'];
  /** 가맹점명 */
  SHOP_NAME?: Maybe<Scalars['String']>;
  /** 1일 */
  D1: Scalars['Float'];
  /** 2일 */
  D2: Scalars['Float'];
  /** 3일 */
  D3: Scalars['Float'];
  /** 4일 */
  D4: Scalars['Float'];
  /** 5일 */
  D5: Scalars['Float'];
  /** 6일 */
  D6: Scalars['Float'];
  /** 7일 */
  D7: Scalars['Float'];
  /** 8일 */
  D8: Scalars['Float'];
  /** 9일 */
  D9: Scalars['Float'];
  /** 10일 */
  D10: Scalars['Float'];
  /** 11일 */
  D11: Scalars['Float'];
  /** 12일 */
  D12: Scalars['Float'];
  /** 13일 */
  D13: Scalars['Float'];
  /** 14일 */
  D14: Scalars['Float'];
  /** 15일 */
  D15: Scalars['Float'];
  /** 16일 */
  D16: Scalars['Float'];
  /** 17일 */
  D17: Scalars['Float'];
  /** 18일 */
  D18: Scalars['Float'];
  /** 19일 */
  D19: Scalars['Float'];
  /** 20일 */
  D20: Scalars['Float'];
  /** 21일 */
  D21: Scalars['Float'];
  /** 22일 */
  D22: Scalars['Float'];
  /** 23일 */
  D23: Scalars['Float'];
  /** 24일 */
  D24: Scalars['Float'];
  /** 25일 */
  D25: Scalars['Float'];
  /** 26일 */
  D26: Scalars['Float'];
  /** 27일 */
  D27: Scalars['Float'];
  /** 28일 */
  D28: Scalars['Float'];
  /** 29일 */
  D29: Scalars['Float'];
  /** 30일 */
  D30: Scalars['Float'];
  /** 31일 */
  D31: Scalars['Float'];
};

export type Entity_Adm7010_Callcenter_Update_List_Result = {
  __typename?: 'ENTITY_ADM7010_CALLCENTER_UPDATE_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7010_Callcenter_Update_Proc_Out>>;
};

export type Entity_Adm7010_Callcenter_Update_Proc_Out = {
  __typename?: 'ENTITY_ADM7010_CALLCENTER_UPDATE_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Adm7010_Callcenter_Update_List>>;
};

export type Entity_Adm7010_Callcenter_Update_List = {
  __typename?: 'ENTITY_ADM7010_CALLCENTER_UPDATE_LIST';
  LIST_NUM: Scalars['Float'];
  TOTAL_COUNT: Scalars['Float'];
  ROW_NUM: Scalars['Float'];
  SEQNO: Scalars['Float'];
  CCCODE?: Maybe<Scalars['String']>;
  CCNAME?: Maybe<Scalars['String']>;
  APP_TYPE?: Maybe<Scalars['String']>;
  UPDATE_MODE?: Maybe<Scalars['String']>;
};

export type Entity_Adm7010_Update_Define_List_Result = {
  __typename?: 'ENTITY_ADM7010_UPDATE_DEFINE_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7010_Update_Define_Proc_Out>>;
};

export type Entity_Adm7010_Update_Define_Proc_Out = {
  __typename?: 'ENTITY_ADM7010_UPDATE_DEFINE_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Adm7010_Update_Define_List>>;
};

export type Entity_Adm7010_Update_Define_List = {
  __typename?: 'ENTITY_ADM7010_UPDATE_DEFINE_LIST';
  LIST_NUM: Scalars['Float'];
  TOTAL_COUNT: Scalars['Float'];
  ROW_NUM: Scalars['Float'];
  SEQNO: Scalars['Float'];
  APP_TYPE?: Maybe<Scalars['String']>;
  UPDATE_MODE?: Maybe<Scalars['String']>;
  VERSION_NAME?: Maybe<Scalars['String']>;
  DOWN_PATH?: Maybe<Scalars['String']>;
  MEMO?: Maybe<Scalars['String']>;
};

export type Entity_Adm7020_Rider_Confirm_List_Result = {
  __typename?: 'ENTITY_ADM7020_RIDER_CONFIRM_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7020_Rider_Confirm_List_Proc_Out>>;
};

export type Entity_Adm7020_Rider_Confirm_List_Proc_Out = {
  __typename?: 'ENTITY_ADM7020_RIDER_CONFIRM_LIST_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Adm7020_Rider_Confirm_List>>;
};

export type Entity_Adm7020_Rider_Confirm_List = {
  __typename?: 'ENTITY_ADM7020_RIDER_CONFIRM_LIST';
  LIST_NUM: Scalars['Float'];
  TOTAL_COUNT: Scalars['Float'];
  ROW_NUM: Scalars['Float'];
  RIDER_CODE: Scalars['Float'];
  CID?: Maybe<Scalars['String']>;
  RIDER_REAL_NAME?: Maybe<Scalars['String']>;
  RIDER_NAME?: Maybe<Scalars['String']>;
  REG_NO?: Maybe<Scalars['String']>;
  REG_NO_MASKING?: Maybe<Scalars['String']>;
  REG_DATE?: Maybe<Scalars['DateTime']>;
  MCODE: Scalars['Float'];
  CCCODE: Scalars['String'];
  CCNAME: Scalars['String'];
};


export type Entity_Adm7030_Get_Rider_Etc_Config_List_Result = {
  __typename?: 'ENTITY_ADM7030_GET_RIDER_ETC_CONFIG_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7030_Get_Rider_Etc_Config_List_Proc_Out>>;
};

export type Entity_Adm7030_Get_Rider_Etc_Config_List_Proc_Out = {
  __typename?: 'ENTITY_ADM7030_GET_RIDER_ETC_CONFIG_LIST_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Adm7030_Get_Rider_Etc_Config_List>>;
};

export type Entity_Adm7030_Get_Rider_Etc_Config_List = {
  __typename?: 'ENTITY_ADM7030_GET_RIDER_ETC_CONFIG_LIST';
  LIST_NUM: Scalars['Float'];
  TOTAL_COUNT: Scalars['Float'];
  ROW_NUM: Scalars['Float'];
  MCODE: Scalars['Float'];
  MNAME?: Maybe<Scalars['String']>;
  CCCODE: Scalars['String'];
  CCNAME?: Maybe<Scalars['String']>;
  OVER_TOUCH_CHECK_YN?: Maybe<Scalars['String']>;
  FIGHT_CALL_CHECK_YN?: Maybe<Scalars['String']>;
  MOD_DATE?: Maybe<Scalars['DateTime']>;
  MOD_UCODE?: Maybe<Scalars['Float']>;
  MOD_NAME?: Maybe<Scalars['String']>;
};

export type Entity_Adm7040_Get_Card_Result_List_Result = {
  __typename?: 'ENTITY_ADM7040_GET_CARD_RESULT_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7040_Get_Card_Result_List_Proc_Out>>;
};

export type Entity_Adm7040_Get_Card_Result_List_Proc_Out = {
  __typename?: 'ENTITY_ADM7040_GET_CARD_RESULT_LIST_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_VAN_GUBUN?: Maybe<Scalars['String']>;
  OUT_RET_CARD_DETAIL_CURSOR?: Maybe<Array<Entity_Adm7040_Get_Card_Detail_Info>>;
  OUT_RET_VAN_CURSOR?: Maybe<Array<Entity_Adm7040_Get_Van_Result_List>>;
};

export type Entity_Adm7040_Get_Card_Detail_Info = {
  __typename?: 'ENTITY_ADM7040_GET_CARD_DETAIL_INFO';
  VAN_CD?: Maybe<Scalars['String']>;
  TUID?: Maybe<Scalars['String']>;
  RIDER_CODE?: Maybe<Scalars['Float']>;
  RESULT?: Maybe<Scalars['String']>;
  AMOUNT?: Maybe<Scalars['Float']>;
  APP_NO?: Maybe<Scalars['String']>;
  ORDER_NO?: Maybe<Scalars['String']>;
  SHOP_REG_NO?: Maybe<Scalars['String']>;
  SIGN_DATE?: Maybe<Scalars['String']>;
  ISRT_DATE?: Maybe<Scalars['DateTime']>;
};

export type Entity_Adm7040_Get_Van_Result_List = {
  __typename?: 'ENTITY_ADM7040_GET_VAN_RESULT_LIST';
  VAN_CD?: Maybe<Scalars['String']>;
  VAN_NAME?: Maybe<Scalars['String']>;
  TUID?: Maybe<Scalars['String']>;
  RIDER_CODE?: Maybe<Scalars['Float']>;
  RESULT?: Maybe<Scalars['String']>;
  CAT_ID?: Maybe<Scalars['String']>;
  SIGN_AMT?: Maybe<Scalars['Float']>;
  CARD_NO?: Maybe<Scalars['String']>;
  CARD_NAME?: Maybe<Scalars['String']>;
  SIGN_DATE?: Maybe<Scalars['String']>;
  ISRT_DATE?: Maybe<Scalars['DateTime']>;
  SEND_TYPE?: Maybe<Scalars['String']>;
  APP_NO?: Maybe<Scalars['String']>;
  ORDER_NO?: Maybe<Scalars['String']>;
  SHOP_REG_NO?: Maybe<Scalars['String']>;
};

export type Entity_Adm7050_Get_Api_Com_Detail_List_Result = {
  __typename?: 'ENTITY_ADM7050_GET_API_COM_DETAIL_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7050_Get_Api_Com_Detail_List_Proc_Out>>;
};

export type Entity_Adm7050_Get_Api_Com_Detail_List_Proc_Out = {
  __typename?: 'ENTITY_ADM7050_GET_API_COM_DETAIL_LIST_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Adm7050_Get_Api_Com_Detail_List>>;
};

export type Entity_Adm7050_Get_Api_Com_Detail_List = {
  __typename?: 'ENTITY_ADM7050_GET_API_COM_DETAIL_LIST';
  LIST_NUM: Scalars['Float'];
  TOTAL_COUNT: Scalars['Float'];
  ROW_NUM: Scalars['Float'];
  CODE_GRP: Scalars['String'];
  API_COM_GBN: Scalars['String'];
  API_COM_NAME?: Maybe<Scalars['String']>;
  PER_ORDER_AMT?: Maybe<Scalars['Float']>;
  PER_RIDER_CNT?: Maybe<Scalars['Float']>;
  AMT_MOVE_CCCODE?: Maybe<Scalars['String']>;
  AMT_MOVE_CCNAME?: Maybe<Scalars['String']>;
  USE_GBN?: Maybe<Scalars['String']>;
  INS_USER_NAME?: Maybe<Scalars['String']>;
  INS_DATE?: Maybe<Scalars['DateTime']>;
  MOD_USER_NAME?: Maybe<Scalars['String']>;
  MOD_DATE?: Maybe<Scalars['DateTime']>;
};

export type Entity_Adm7060_Get_Master_Code_List_Result = {
  __typename?: 'ENTITY_ADM7060_GET_MASTER_CODE_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7060_Get_Master_Code_List_Proc_Out>>;
};

export type Entity_Adm7060_Get_Master_Code_List_Proc_Out = {
  __typename?: 'ENTITY_ADM7060_GET_MASTER_CODE_LIST_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Adm7060_Get_Master_Code_List>>;
};

export type Entity_Adm7060_Get_Master_Code_List = {
  __typename?: 'ENTITY_ADM7060_GET_MASTER_CODE_LIST';
  GROUP_CD: Scalars['String'];
  CODE_NM?: Maybe<Scalars['String']>;
  GBN1?: Maybe<Scalars['String']>;
  GBN2?: Maybe<Scalars['String']>;
  MEMO?: Maybe<Scalars['String']>;
  SORT_NO?: Maybe<Scalars['Float']>;
  USE_GBN?: Maybe<Scalars['String']>;
  MOD_UCODE?: Maybe<Scalars['Float']>;
  MOD_USER_NAME?: Maybe<Scalars['String']>;
  MOD_DATE?: Maybe<Scalars['DateTime']>;
};

export type Entity_Adm7060_Get_Code_Detail_List_Result = {
  __typename?: 'ENTITY_ADM7060_GET_CODE_DETAIL_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7060_Get_Code_Detail_List_Proc_Out>>;
};

export type Entity_Adm7060_Get_Code_Detail_List_Proc_Out = {
  __typename?: 'ENTITY_ADM7060_GET_CODE_DETAIL_LIST_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Adm7060_Get_Code_Detail_List>>;
};

export type Entity_Adm7060_Get_Code_Detail_List = {
  __typename?: 'ENTITY_ADM7060_GET_CODE_DETAIL_LIST';
  GROUP_CD: Scalars['String'];
  GROUP_NM?: Maybe<Scalars['String']>;
  CD: Scalars['String'];
  CD_NM?: Maybe<Scalars['String']>;
  GBN1?: Maybe<Scalars['String']>;
  GBN2?: Maybe<Scalars['String']>;
  GBN3?: Maybe<Scalars['String']>;
  GBN4?: Maybe<Scalars['String']>;
  GBN5?: Maybe<Scalars['String']>;
  REMARK?: Maybe<Scalars['String']>;
  SORT_NO?: Maybe<Scalars['Float']>;
  USE_GBN?: Maybe<Scalars['String']>;
  MOD_UCODE?: Maybe<Scalars['Float']>;
  MOD_USER_NAME?: Maybe<Scalars['String']>;
  MOD_DATE?: Maybe<Scalars['DateTime']>;
};

export type Entity_Adm7070_Get_Poi_Info_List_Result = {
  __typename?: 'ENTITY_ADM7070_GET_POI_INFO_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7070_Get_Poi_Info_List_Proc_Out>>;
};

export type Entity_Adm7070_Get_Poi_Info_List_Proc_Out = {
  __typename?: 'ENTITY_ADM7070_GET_POI_INFO_LIST_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Adm7070_Get_Poi_Info_List>>;
};

export type Entity_Adm7070_Get_Poi_Info_List = {
  __typename?: 'ENTITY_ADM7070_GET_POI_INFO_LIST';
  LIST_NUM: Scalars['Float'];
  TOTAL_COUNT: Scalars['Float'];
  ROW_NUM: Scalars['Float'];
  SEQNO: Scalars['Float'];
  PROC_GBN?: Maybe<Scalars['String']>;
  ISRT_DATE?: Maybe<Scalars['String']>;
  ISRT_TIME?: Maybe<Scalars['DateTime']>;
  POI_ADDR?: Maybe<Scalars['String']>;
  LON?: Maybe<Scalars['Float']>;
  LAT?: Maybe<Scalars['Float']>;
  LON_GRS80?: Maybe<Scalars['Float']>;
  LAT_GRS80?: Maybe<Scalars['Float']>;
  POI_NAME?: Maybe<Scalars['String']>;
  CCCODE?: Maybe<Scalars['String']>;
  SHOP_CD?: Maybe<Scalars['String']>;
  SIDO?: Maybe<Scalars['String']>;
  GUNGU?: Maybe<Scalars['String']>;
  DONG?: Maybe<Scalars['String']>;
  ISRT_TYPE?: Maybe<Scalars['String']>;
  POI_GBN?: Maybe<Scalars['String']>;
  SET_CNT?: Maybe<Scalars['Float']>;
  GET_CNT?: Maybe<Scalars['Float']>;
  PROC_TIME?: Maybe<Scalars['DateTime']>;
};

export type Entity_Adm7080_Get_Multi_Mapping_List_Result = {
  __typename?: 'ENTITY_ADM7080_GET_MULTI_MAPPING_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7080_Get_Multi_Mapping_List_Proc_Out>>;
};

export type Entity_Adm7080_Get_Multi_Mapping_List_Proc_Out = {
  __typename?: 'ENTITY_ADM7080_GET_MULTI_MAPPING_LIST_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Adm7080_Get_Multi_Mapping_List>>;
};

export type Entity_Adm7080_Get_Multi_Mapping_List = {
  __typename?: 'ENTITY_ADM7080_GET_MULTI_MAPPING_LIST';
  LIST_NUM: Scalars['Float'];
  TOTAL_COUNT: Scalars['Float'];
  ROW_NUM: Scalars['Float'];
  ACC_YN?: Maybe<Scalars['String']>;
  HELP_CENTER?: Maybe<Scalars['String']>;
  MCODE?: Maybe<Scalars['String']>;
  CCCODE?: Maybe<Scalars['String']>;
  CCNAME?: Maybe<Scalars['String']>;
  SHOP_CD?: Maybe<Scalars['String']>;
  SHOP_NAME?: Maybe<Scalars['String']>;
  API_COM_GBN?: Maybe<Scalars['String']>;
  API_COM_CODE?: Maybe<Scalars['String']>;
  MEMO?: Maybe<Scalars['String']>;
  USE_GBN?: Maybe<Scalars['String']>;
  MOD_DATE?: Maybe<Scalars['DateTime']>;
  MOD_USER_NAME?: Maybe<Scalars['String']>;
  INS_DATE?: Maybe<Scalars['DateTime']>;
  INS_USER_NAME?: Maybe<Scalars['String']>;
  KEY_CCCODE?: Maybe<Scalars['String']>;
  KEY_SHOP_CD?: Maybe<Scalars['String']>;
  KEY_API_COM_GBN?: Maybe<Scalars['String']>;
  KEY_API_COM_CODE?: Maybe<Scalars['String']>;
};

export type Entity_Adm8110_Body_Result = {
  __typename?: 'ENTITY_ADM8110_BODY_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm8110_Body>>;
};

export type Entity_Adm8110_Body = {
  __typename?: 'ENTITY_ADM8110_BODY';
  /** 총건수 */
  TOTAL_COUNT?: Maybe<Scalars['Float']>;
  /** 번호 */
  ROW_NUM?: Maybe<Scalars['Float']>;
  /** ORDER_DATE */
  ORDER_DATE?: Maybe<Scalars['String']>;
  /** ORDER_NO */
  ORDER_NO?: Maybe<Scalars['String']>;
  /** CHARGE_DATE */
  CHARGE_DATE?: Maybe<Scalars['String']>;
  /** CHARGE_GBN */
  CHARGE_GBN?: Maybe<Scalars['String']>;
  /** IN_AMT */
  IN_AMT?: Maybe<Scalars['Float']>;
  /** OUT_AMT */
  OUT_AMT?: Maybe<Scalars['Float']>;
  /** CHARGE_AMT */
  CHARGE_AMT?: Maybe<Scalars['Float']>;
  /** CHARGE_UCODE */
  CHARGE_UCODE?: Maybe<Scalars['String']>;
  /** MEMO */
  MEMO?: Maybe<Scalars['String']>;
  /** BANKCODE */
  BANKCODE?: Maybe<Scalars['String']>;
  /** VACCOUNT */
  VACCOUNT?: Maybe<Scalars['String']>;
  /** CHARGE_ACC */
  CHARGE_ACC?: Maybe<Scalars['String']>;
  /** SHOP_NAME */
  SHOP_NAME?: Maybe<Scalars['String']>;
};

export type Entity_Adm8120_Body_Result = {
  __typename?: 'ENTITY_ADM8120_BODY_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm8120_Body>>;
};

export type Entity_Adm8120_Body = {
  __typename?: 'ENTITY_ADM8120_BODY';
  /** 총건수 */
  TOTAL_COUNT?: Maybe<Scalars['Float']>;
  /** 번호 */
  ROW_NUM?: Maybe<Scalars['Float']>;
  /** ORDER_DATE */
  ORDER_DATE?: Maybe<Scalars['String']>;
  /** ORDER_NO */
  ORDER_NO?: Maybe<Scalars['String']>;
  /** CHARGE_DATE */
  CHARGE_DATE?: Maybe<Scalars['String']>;
  /** CHARGE_GBN */
  CHARGE_GBN?: Maybe<Scalars['String']>;
  /** IN_AMT */
  IN_AMT?: Maybe<Scalars['Float']>;
  /** OUT_AMT */
  OUT_AMT?: Maybe<Scalars['Float']>;
  /** CHARGE_AMT */
  CHARGE_AMT?: Maybe<Scalars['Float']>;
  /** CHARGE_UCODE */
  CHARGE_UCODE?: Maybe<Scalars['String']>;
  /** MEMO */
  MEMO?: Maybe<Scalars['String']>;
  /** BANKCODE */
  BANKCODE?: Maybe<Scalars['String']>;
  /** VACCOUNT */
  VACCOUNT?: Maybe<Scalars['String']>;
  /** CHARGE_ACC */
  CHARGE_ACC?: Maybe<Scalars['String']>;
  /** SHOP_NAME */
  SHOP_NAME?: Maybe<Scalars['String']>;
  /** USER_ID */
  USER_ID?: Maybe<Scalars['String']>;
  /** MCODE */
  MCODE?: Maybe<Scalars['String']>;
  /** CCCODE */
  CCCODE?: Maybe<Scalars['String']>;
  /** SHOP_CD */
  SHOP_CD?: Maybe<Scalars['String']>;
  /** TRAN_MCODE */
  TRAN_MCODE?: Maybe<Scalars['String']>;
  /** TRAN_CCCODE */
  TRAN_CCCODE?: Maybe<Scalars['String']>;
  /** ACC_DATE */
  ACC_DATE?: Maybe<Scalars['String']>;
};

export type Entity_Adm9010_Get_Web_Menu_List_Result = {
  __typename?: 'ENTITY_ADM9010_GET_WEB_MENU_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm9010_Get_Web_Menu_List>>;
};

export type Entity_Adm9010_Get_Web_Menu_List = {
  __typename?: 'ENTITY_ADM9010_GET_WEB_MENU_LIST';
  WEB_GROUP: Scalars['String'];
  MENU_ID: Scalars['String'];
  LIST_NUM?: Maybe<Scalars['Float']>;
  TOTAL_COUNT?: Maybe<Scalars['Float']>;
  MENU_NAME?: Maybe<Scalars['String']>;
  URL?: Maybe<Scalars['String']>;
  MENU_TYPE?: Maybe<Scalars['String']>;
  ICON?: Maybe<Scalars['String']>;
  P_MENU_ID?: Maybe<Scalars['String']>;
  SORT_SEQ?: Maybe<Scalars['Float']>;
  REMARK?: Maybe<Scalars['String']>;
  USE_YN?: Maybe<Scalars['String']>;
  MOD_UNAME?: Maybe<Scalars['String']>;
  MOD_DATE?: Maybe<Scalars['DateTime']>;
  RGST_UNAME?: Maybe<Scalars['String']>;
  RGST_DATE?: Maybe<Scalars['DateTime']>;
};

export type Entity_Adm9020_Get_Group_List_Result = {
  __typename?: 'ENTITY_ADM9020_GET_GROUP_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm9020_Get_Group_List>>;
};

export type Entity_Adm9020_Get_Group_List = {
  __typename?: 'ENTITY_ADM9020_GET_GROUP_LIST';
  SORT_NO: Scalars['Float'];
  TOTAL_COUNT: Scalars['Float'];
  WEB_GROUP: Scalars['String'];
  ORIGINAL_WEB_GROUP: Scalars['String'];
  ORIGINAL_WEB_GROUP_MASTER_CODE: Scalars['String'];
  GROUP_ID: Scalars['String'];
  ORIGINAL_GROUP_ID: Scalars['String'];
  GROUP_NAME?: Maybe<Scalars['String']>;
};

export type Entity_Adm9020_Get_Mng_Menu_List_Result = {
  __typename?: 'ENTITY_ADM9020_GET_MNG_MENU_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm9020_Get_Mng_Menu_List_Proc_Out>>;
};

export type Entity_Adm9020_Get_Mng_Menu_List_Proc_Out = {
  __typename?: 'ENTITY_ADM9020_GET_MNG_MENU_LIST_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Adm9020_Get_Mng_Menu_List>>;
};

export type Entity_Adm9020_Get_Mng_Menu_List = {
  __typename?: 'ENTITY_ADM9020_GET_MNG_MENU_LIST';
  IS_CHECKED: Scalars['String'];
  MENU_ID?: Maybe<Scalars['String']>;
  MENU_NAME?: Maybe<Scalars['String']>;
  P_MENU_ID?: Maybe<Scalars['String']>;
  LEVEL?: Maybe<Scalars['Float']>;
  SORT_SEQ?: Maybe<Scalars['Float']>;
};

export type Entity_Adm9020_Get_Mng_Menu_Group_User_List_Result = {
  __typename?: 'ENTITY_ADM9020_GET_MNG_MENU_GROUP_USER_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm9020_Get_Mng_Menu_Group_User_List_Proc_Out>>;
};

export type Entity_Adm9020_Get_Mng_Menu_Group_User_List_Proc_Out = {
  __typename?: 'ENTITY_ADM9020_GET_MNG_MENU_GROUP_USER_LIST_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Adm9020_Get_Mng_Menu_Group_User_List>>;
};

export type Entity_Adm9020_Get_Mng_Menu_Group_User_List = {
  __typename?: 'ENTITY_ADM9020_GET_MNG_MENU_GROUP_USER_LIST';
  LIST_NUM: Scalars['Float'];
  TOTAL_COUNT: Scalars['Float'];
  ROW_NUM: Scalars['Float'];
  IS_CHECKED: Scalars['String'];
  UCODE: Scalars['Float'];
  USER_ID: Scalars['String'];
  USER_NAME?: Maybe<Scalars['String']>;
  GROUP_ID?: Maybe<Scalars['String']>;
};

export type Entity_Cdm0201_Item_Code_Result = {
  __typename?: 'ENTITY_CDM0201_ITEM_CODE_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Cdm0201_Item_Code>>;
};

export type Entity_Cdm0201_Item_Code = {
  __typename?: 'ENTITY_CDM0201_ITEM_CODE';
  /** 업종 코드 */
  ICODE: Scalars['String'];
  /** 업종 이름 */
  INAME?: Maybe<Scalars['String']>;
  /** 업종 설명 */
  IDESCRIPTION: Scalars['String'];
  /** 정렬 번호 */
  SORT_SEQ?: Maybe<Scalars['Float']>;
};

export type Entity_Cdm0601_Shop_Info_List = {
  __typename?: 'ENTITY_CDM0601_SHOP_INFO_LIST';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Cdm0601_Shop_Info>>;
};

export type Entity_Cdm0601_Shop_Info = {
  __typename?: 'ENTITY_CDM0601_SHOP_INFO';
  /** 회원사 코드 */
  MCODE: Scalars['Float'];
  /** 회원사 이름 */
  MNAME?: Maybe<Scalars['String']>;
  /** 콜센터 코드 */
  CCCODE: Scalars['String'];
  /** 콜센터 이름 */
  CCNAME?: Maybe<Scalars['String']>;
  /** 콜센터 타입 */
  CCTYPE?: Maybe<Scalars['String']>;
  /** 가맹점 코드 */
  SCODE: Scalars['String'];
  /** 가맹점 이름 */
  SNAME?: Maybe<Scalars['String']>;
  /** 핸드폰 번호 */
  MOBILE?: Maybe<Scalars['String']>;
  /** 전화 번호 */
  TELNO?: Maybe<Scalars['String']>;
  /** 기준 위치 */
  BASIC_LOC?: Maybe<Scalars['String']>;
  /** 대표자 */
  OWNER?: Maybe<Scalars['String']>;
  /** 업종명 */
  ITEM_NAME?: Maybe<Scalars['String']>;
  /** 메인 품목 */
  MAIN_ITEM?: Maybe<Scalars['String']>;
  /** 주소 */
  ADDR?: Maybe<Scalars['String']>;
  /** 정렬 순서 */
  SORT_SEQ?: Maybe<Scalars['Float']>;
  /** 그룹 ID */
  GROUP_ID?: Maybe<Scalars['String']>;
  /** 데이터 로우 넘버 */
  LIST_NUM?: Maybe<Scalars['Float']>;
  /** 총 로우 갯수 */
  TOTAL_COUNT?: Maybe<Scalars['Float']>;
};

export type Entity_Cdm0603_Get_Callcount_Membership_List_Result = {
  __typename?: 'ENTITY_CDM0603_GET_CALLCOUNT_MEMBERSHIP_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Cdm0603_Get_Callcount_Membership_List_Proc_Out>>;
};

export type Entity_Cdm0603_Get_Callcount_Membership_List_Proc_Out = {
  __typename?: 'ENTITY_CDM0603_GET_CALLCOUNT_MEMBERSHIP_LIST_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Cdm0603_Get_Callcount_Membership_List>>;
};

export type Entity_Cdm0603_Get_Callcount_Membership_List = {
  __typename?: 'ENTITY_CDM0603_GET_CALLCOUNT_MEMBERSHIP_LIST';
  TOTAL_COUNT: Scalars['Float'];
  ROW_NUM: Scalars['Float'];
  HELP_CENTER_NAME?: Maybe<Scalars['String']>;
  CENTER_TYPE_NAME?: Maybe<Scalars['String']>;
  GROUP_ID?: Maybe<Scalars['String']>;
  HELP_CENTER?: Maybe<Scalars['String']>;
  MCODE?: Maybe<Scalars['String']>;
  MNAME?: Maybe<Scalars['String']>;
  CCCODE?: Maybe<Scalars['String']>;
  CCNAME?: Maybe<Scalars['String']>;
  CLEVEL?: Maybe<Scalars['String']>;
  C_ETC_GBN1?: Maybe<Scalars['String']>;
  NEW_GBN?: Maybe<Scalars['String']>;
  OPEN_DT?: Maybe<Scalars['String']>;
  TOT_CNT?: Maybe<Scalars['Float']>;
  OK_CNT?: Maybe<Scalars['Float']>;
  CANCEL_CNT?: Maybe<Scalars['Float']>;
  CARD_CNT?: Maybe<Scalars['Float']>;
  CARD_CNT_HANDY?: Maybe<Scalars['Float']>;
  CARD_CNT_MULTI?: Maybe<Scalars['Float']>;
  BASIC_AMT?: Maybe<Scalars['Float']>;
  CALL_AMT?: Maybe<Scalars['Float']>;
  APP_CNT?: Maybe<Scalars['Float']>;
};

export type Entity_Cdm0604_Get_Day_Cnt_Membership_List_Result = {
  __typename?: 'ENTITY_CDM0604_GET_DAY_CNT_MEMBERSHIP_LIST_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Cdm0604_Get_Day_Cnt_Membership_List_Proc_Out>>;
};

export type Entity_Cdm0604_Get_Day_Cnt_Membership_List_Proc_Out = {
  __typename?: 'ENTITY_CDM0604_GET_DAY_CNT_MEMBERSHIP_LIST_PROC_OUT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RET_CURSOR?: Maybe<Array<Entity_Cdm0604_Get_Day_Cnt_Membership_List>>;
};

export type Entity_Cdm0604_Get_Day_Cnt_Membership_List = {
  __typename?: 'ENTITY_CDM0604_GET_DAY_CNT_MEMBERSHIP_LIST';
  TOTAL_COUNT: Scalars['Float'];
  ROW_NUM: Scalars['Float'];
  CENTER_TYPE_NAME?: Maybe<Scalars['String']>;
  HELP_CENTER?: Maybe<Scalars['String']>;
  HELP_CENTER_NAME?: Maybe<Scalars['String']>;
  GROUP_ID?: Maybe<Scalars['String']>;
  ORDER_DATE?: Maybe<Scalars['String']>;
  MCODE?: Maybe<Scalars['String']>;
  MNAME?: Maybe<Scalars['String']>;
  C_ETC_GBN1?: Maybe<Scalars['String']>;
  CCCODE?: Maybe<Scalars['String']>;
  CCNAME?: Maybe<Scalars['String']>;
  CLEVEL?: Maybe<Scalars['String']>;
  OPEN_DT?: Maybe<Scalars['String']>;
  TOT_CNT?: Maybe<Scalars['Float']>;
  OK_CNT?: Maybe<Scalars['Float']>;
  CANCEL_CNT?: Maybe<Scalars['Float']>;
  CARD_CNT?: Maybe<Scalars['Float']>;
  CARD_CNT_HANDY?: Maybe<Scalars['Float']>;
  CARD_CNT_MULTI?: Maybe<Scalars['Float']>;
  BASIC_AMT?: Maybe<Scalars['Float']>;
  CALL_AMT?: Maybe<Scalars['Float']>;
  ORDER_CNT?: Maybe<Scalars['Float']>;
  APP_CNT?: Maybe<Scalars['Float']>;
  CARD_CNT_NICE?: Maybe<Scalars['Float']>;
  CARD_CNT_APP_POS?: Maybe<Scalars['Float']>;
  CARD_CNT_NEW_KSNET?: Maybe<Scalars['Float']>;
  CARD_CNT_NEW_KSNET2?: Maybe<Scalars['Float']>;
  BM_API_CANCEL_CNT?: Maybe<Scalars['Float']>;
};

export type Entity_Cdm0615_Api_Com_Calculation_Result = {
  __typename?: 'ENTITY_CDM0615_API_COM_CALCULATION_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Cdm0615_Api_Com_Calculation>>;
};

export type Entity_Cdm0615_Api_Com_Calculation = {
  __typename?: 'ENTITY_CDM0615_API_COM_CALCULATION';
  /** 번호 */
  LIST_NUM?: Maybe<Scalars['Float']>;
  /** 전체 로우 수 */
  TOTAL_COUNT?: Maybe<Scalars['Float']>;
  /** 접수 일자 */
  ORDER_DATE?: Maybe<Scalars['String']>;
  /** 지원센터 코드 */
  HCCODE?: Maybe<Scalars['String']>;
  /** 지원센터 이름 */
  HCNAME?: Maybe<Scalars['String']>;
  /** 회원사 이름 */
  MNAME?: Maybe<Scalars['String']>;
  /** 그룹 아이디(코드) */
  GROUP_ID?: Maybe<Scalars['String']>;
  /** 콜센터 코드 */
  CCCODE?: Maybe<Scalars['String']>;
  /** 콜센터 타입 */
  CCTYPE?: Maybe<Scalars['String']>;
  /** 접수 시간 */
  ORDER_TIME?: Maybe<Scalars['String']>;
  /** 주문 번호 */
  ORDER_NO?: Maybe<Scalars['String']>;
  /** 접수 구분 */
  RECEIPT_TYPE?: Maybe<Scalars['String']>;
  /** 오더 상태 코드 */
  ORDER_STATUS_CODE?: Maybe<Scalars['String']>;
  /** 배차 시간 */
  ALLOCATE_TIME?: Maybe<Scalars['String']>;
  /** 픽업 시간 */
  PICKUP_TIME?: Maybe<Scalars['String']>;
  /** 완료 시간 */
  COMPLETE_TIME?: Maybe<Scalars['String']>;
  /** 취소 시간 */
  CANCEL_TIME?: Maybe<Scalars['String']>;
  /** 가맹점 코드 */
  SCODE?: Maybe<Scalars['String']>;
  /** 가맹점명 */
  SNAME?: Maybe<Scalars['String']>;
  /** 등록자 */
  REG_SNAME?: Maybe<Scalars['String']>;
  /** 출발지 전화번호 */
  START_TELNO?: Maybe<Scalars['String']>;
  /** 출발지 우편번호 */
  START_ADDR?: Maybe<Scalars['String']>;
  /** 출발 시/도 */
  START_SIDO?: Maybe<Scalars['String']>;
  /** 출발 군/구 */
  START_GUNGU?: Maybe<Scalars['String']>;
  /** 출발 동 */
  START_DONG?: Maybe<Scalars['String']>;
  /** 출발 기본 위치/출발 정보 */
  START_INFO?: Maybe<Scalars['String']>;
  /** 도착지 전화번호 */
  DEST_TELNO?: Maybe<Scalars['String']>;
  /** 도착지 우편번호 */
  DEST_ADDR?: Maybe<Scalars['String']>;
  /** 도착 시/도 */
  DEST_SIDO?: Maybe<Scalars['String']>;
  /** 도착 군/구 */
  DEST_GUNGU?: Maybe<Scalars['String']>;
  /** 도착 동 + 우편번호 */
  DEST_DONG?: Maybe<Scalars['String']>;
  /** 메모 */
  MEMO?: Maybe<Scalars['String']>;
  /** 예약 구분 */
  RESERVE?: Maybe<Scalars['String']>;
  /** 예약 시간 */
  RESERVE_TIME?: Maybe<Scalars['String']>;
  /** 예약 해제 시간 */
  RELEASE_TIME?: Maybe<Scalars['String']>;
  /** 배송요금 */
  CBASIC?: Maybe<Scalars['Float']>;
  /** 처리비 */
  CALL_AMT?: Maybe<Scalars['Float']>;
  /** 결제 방법 코드 */
  PAY_TYPE_CODE?: Maybe<Scalars['String']>;
  /** 처리 기사 콜센터 */
  RIDER_CCCODE?: Maybe<Scalars['String']>;
  /** 처리 기사 코드 */
  RIDER_CODE?: Maybe<Scalars['String']>;
  /** 처리 기사 콜센터 + 이름 */
  RIDER_NAME_WITH_CC?: Maybe<Scalars['String']>;
  /** 시간 차이 */
  TIMEDIFF?: Maybe<Scalars['Float']>;
  /** 조리 대기 시간 */
  COOK_WAIT_TIME?: Maybe<Scalars['Float']>;
  /** 시작 경도 */
  START_LON?: Maybe<Scalars['String']>;
  /** 기사 핸드폰 번호 */
  RIDER_MOBILE?: Maybe<Scalars['String']>;
  /** 취소 사유 */
  CANCEL_REASON?: Maybe<Scalars['String']>;
  /** 도착 시간 */
  ARRIVE_TIME?: Maybe<Scalars['String']>;
  /** 목적지까지의 거리 */
  DEST_DIST?: Maybe<Scalars['String']>;
  /** 가맹점 상태 수? */
  OK_CNT?: Maybe<Scalars['Float']>;
  /** 결제 방법 */
  PAY_TYPE_NAME?: Maybe<Scalars['String']>;
  /** 카드 결제 결과 */
  CARD_RETURN?: Maybe<Scalars['String']>;
  /** 음식값 */
  FOOD_AMT?: Maybe<Scalars['Float']>;
  /** 주문 상태 */
  ORDER_STATUS_NAME?: Maybe<Scalars['String']>;
  /** 콜센터명 */
  CCNAME?: Maybe<Scalars['String']>;
  /** 수정자명 => 취소자명으로 사용 */
  MOD_NAME?: Maybe<Scalars['String']>;
  /** 접수자명 */
  RECEIPT_NAME?: Maybe<Scalars['String']>;
  /** 도착 도로명 주소 */
  DEST_ROAD_LOCATION?: Maybe<Scalars['String']>;
  /** 월별 가맹점 업체 수? */
  OK_CNT_MONTH?: Maybe<Scalars['Float']>;
  /** 남은 시간? */
  REMAIN_TIME?: Maybe<Scalars['String']>;
  /** 판매자명 */
  SALES_NAME?: Maybe<Scalars['String']>;
  /** 할증 금액 */
  EXTRA_AMT?: Maybe<Scalars['Float']>;
  /** 도착지 경도 */
  DEST_LON?: Maybe<Scalars['String']>;
  /** 도착지 위도 */
  DEST_LAT?: Maybe<Scalars['String']>;
  /** 도착지 주소 */
  DEST_LOCATION?: Maybe<Scalars['String']>;
  /** 현금<=>카드 결제 변경 내역 */
  PAY_CHANGE_LOG?: Maybe<Scalars['String']>;
  /** API/앱주문 업체 코드 */
  API_APP_CODE?: Maybe<Scalars['String']>;
  /** API/앱주문 업체명 */
  API_APP_NAME?: Maybe<Scalars['String']>;
  /** API/앱주문 업체 구분 */
  API_COM_GBN?: Maybe<Scalars['String']>;
  /** 도착지 전화 필수입력 여부 Y/N */
  DEST_TELNO_GBN?: Maybe<Scalars['String']>;
  /** 현금<->카드 정산 유무 */
  CASH_OR_CARD?: Maybe<Scalars['String']>;
  /** 현금=>선결제 처리 */
  CASH_OR_PREPAYMENT?: Maybe<Scalars['String']>;
  /** 직선 거리 */
  DIRECT_DIST?: Maybe<Scalars['String']>;
  /** 기사 생년월일 */
  RIDER_REGNO?: Maybe<Scalars['String']>;
  /** 원천세 */
  WON_TAX?: Maybe<Scalars['Float']>;
  /** 어플연동 정산금액 */
  CALC_AMT?: Maybe<Scalars['Float']>;
  /** API 관리비 */
  SHOP_PGM_AMT?: Maybe<Scalars['Float']>;
  /** API 주문번호 */
  API_ORDER_NO?: Maybe<Scalars['String']>;
  /** 기사 실명 */
  RIDER_REAL_NAME?: Maybe<Scalars['String']>;
  /** 기사 인증 이름 */
  RIDER_CERTIFIED_NAME?: Maybe<Scalars['String']>;
  /** 기사 인증 주민번호 */
  RIDER_CERTIFIED_SOCIAL_NUMBER?: Maybe<Scalars['String']>;
  /** 기사 인증일 */
  RIDER_CERTIFIED_DATE?: Maybe<Scalars['String']>;
};

export type Entity_Cdm0617_Api_Com_Receipt_Result = {
  __typename?: 'ENTITY_CDM0617_API_COM_RECEIPT_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Cdm0617_Api_Com_Receipt>>;
};

export type Entity_Cdm0617_Api_Com_Receipt = {
  __typename?: 'ENTITY_CDM0617_API_COM_RECEIPT';
  /** 번호 */
  LIST_NUM?: Maybe<Scalars['Float']>;
  /** 전체 로우 수 */
  TOTAL_COUNT?: Maybe<Scalars['Float']>;
  /** 접수 일자 */
  ORDER_DATE?: Maybe<Scalars['String']>;
  /** 지원센터 코드 */
  HCCODE?: Maybe<Scalars['String']>;
  /** 지원센터 이름 */
  HCNAME?: Maybe<Scalars['String']>;
  /** 회원사 이름 */
  MNAME?: Maybe<Scalars['String']>;
  /** 그룹 아이디(코드) */
  GROUP_ID?: Maybe<Scalars['String']>;
  /** 콜센터 코드 */
  CCCODE?: Maybe<Scalars['String']>;
  /** 콜센터 타입 */
  CCTYPE?: Maybe<Scalars['String']>;
  /** 접수 시간 */
  ORDER_TIME?: Maybe<Scalars['String']>;
  /** 주문 번호 */
  ORDER_NO?: Maybe<Scalars['String']>;
  /** 접수 구분 */
  RECEIPT_TYPE?: Maybe<Scalars['String']>;
  /** 오더 상태 코드 */
  ORDER_STATUS_CODE?: Maybe<Scalars['String']>;
  /** 배차 시간 */
  ALLOCATE_TIME?: Maybe<Scalars['String']>;
  /** 픽업 시간 */
  PICKUP_TIME?: Maybe<Scalars['String']>;
  /** 완료 시간 */
  COMPLETE_TIME?: Maybe<Scalars['String']>;
  /** 취소 시간 */
  CANCEL_TIME?: Maybe<Scalars['String']>;
  /** 가맹점 코드 */
  SCODE?: Maybe<Scalars['String']>;
  /** 가맹점명 */
  SNAME?: Maybe<Scalars['String']>;
  /** 등록자 */
  REG_SNAME?: Maybe<Scalars['String']>;
  /** 출발지 전화번호 */
  START_TELNO?: Maybe<Scalars['String']>;
  /** 출발지 우편번호 */
  START_ADDR?: Maybe<Scalars['String']>;
  /** 출발 시/도 */
  START_SIDO?: Maybe<Scalars['String']>;
  /** 출발 군/구 */
  START_GUNGU?: Maybe<Scalars['String']>;
  /** 출발 동 */
  START_DONG?: Maybe<Scalars['String']>;
  /** 출발 기본 위치/출발 정보 */
  START_INFO?: Maybe<Scalars['String']>;
  /** 도착지 전화번호 */
  DEST_TELNO?: Maybe<Scalars['String']>;
  /** 도착지 우편번호 */
  DEST_ADDR?: Maybe<Scalars['String']>;
  /** 도착 시/도 */
  DEST_SIDO?: Maybe<Scalars['String']>;
  /** 도착 군/구 */
  DEST_GUNGU?: Maybe<Scalars['String']>;
  /** 도착 동 + 우편번호 */
  DEST_DONG?: Maybe<Scalars['String']>;
  /** 메모 */
  MEMO?: Maybe<Scalars['String']>;
  /** 예약 구분 */
  RESERVE?: Maybe<Scalars['String']>;
  /** 예약 시간 */
  RESERVE_TIME?: Maybe<Scalars['String']>;
  /** 예약 해제 시간(픽업까지 걸리는 시간) */
  RELEASE_TIME?: Maybe<Scalars['String']>;
  /** 배송요금 */
  CBASIC?: Maybe<Scalars['Float']>;
  /** 처리비(수수료) */
  CALL_AMT?: Maybe<Scalars['Float']>;
  /** 결제 방법 코드 */
  PAY_TYPE_CODE?: Maybe<Scalars['String']>;
  /** 처리 기사 콜센터 */
  RIDER_CCCODE?: Maybe<Scalars['String']>;
  /** 처리 기사 코드 */
  RIDER_CODE?: Maybe<Scalars['String']>;
  /** 처리 기사 콜센터 + 이름 */
  RIDER_NAME_WITH_CC?: Maybe<Scalars['String']>;
  /** 시간 차이 */
  TIMEDIFF?: Maybe<Scalars['Float']>;
  /** 조리 대기 시간 */
  COOK_WAIT_TIME?: Maybe<Scalars['Float']>;
  /** 시작 경도 */
  START_LON?: Maybe<Scalars['String']>;
  /** 기사 핸드폰 번호 */
  RIDER_MOBILE?: Maybe<Scalars['String']>;
  /** 취소 사유 */
  CANCEL_REASON?: Maybe<Scalars['String']>;
  /** 도착 시간 */
  ARRIVE_TIME?: Maybe<Scalars['String']>;
  /** 목적지까지의 거리 */
  DEST_DIST?: Maybe<Scalars['String']>;
  /** 결제 방법 */
  PAY_TYPE_NAME?: Maybe<Scalars['String']>;
  /** 카드 결제 결과 */
  CARD_RETURN?: Maybe<Scalars['String']>;
  /** 음식값 */
  FOOD_AMT?: Maybe<Scalars['Float']>;
  /** 주문 상태 */
  ORDER_STATUS_NAME?: Maybe<Scalars['String']>;
  /** 콜센터명 */
  CCNAME?: Maybe<Scalars['String']>;
  /** 수정자명 => 취소자명으로 사용 */
  MOD_NAME?: Maybe<Scalars['String']>;
  /** 접수자명 */
  RECEIPT_NAME?: Maybe<Scalars['String']>;
  /** 도착 도로명 주소 */
  DEST_ROAD_LOCATION?: Maybe<Scalars['String']>;
  /** 접수 횟수 */
  OK_CNT?: Maybe<Scalars['Float']>;
  /** 월별 접수 횟수 */
  OK_CNT_MONTH?: Maybe<Scalars['Float']>;
  /** 남은 시간 */
  REMAIN_TIME?: Maybe<Scalars['String']>;
  /** 판매자명 */
  SALES_NAME?: Maybe<Scalars['String']>;
  /** 할증 금액 */
  EXTRA_AMT?: Maybe<Scalars['Float']>;
  /** 도착지 경도 */
  DEST_LON?: Maybe<Scalars['String']>;
  /** 도착지 위도 */
  DEST_LAT?: Maybe<Scalars['String']>;
  /** 도착지 주소 */
  DEST_LOCATION?: Maybe<Scalars['String']>;
  /** 현금<=>카드 결제 변경 내역 */
  PAY_CHANGE_LOG?: Maybe<Scalars['String']>;
  /** API/앱주문 업체 코드 */
  API_APP_CODE?: Maybe<Scalars['String']>;
  /** API/앱주문 업체명 */
  API_APP_NAME?: Maybe<Scalars['String']>;
  /** API/앱주문 업체 구분 */
  API_COM_GBN?: Maybe<Scalars['String']>;
  /** 도착지 전화 필수입력 여부 Y/N */
  DEST_TELNO_GBN?: Maybe<Scalars['String']>;
  /** 현금<->카드 정산 유무 */
  CASH_OR_CARD?: Maybe<Scalars['String']>;
  /** 현금=>선결제 정산 유무 */
  CASH_OR_PREPAYMENT?: Maybe<Scalars['String']>;
  /** 직선 거리 */
  DIRECT_DIST?: Maybe<Scalars['String']>;
  /** 기사 생년월일 */
  RIDER_REGNO?: Maybe<Scalars['String']>;
  /** 원천세 */
  WON_TAX?: Maybe<Scalars['Float']>;
  /** 어플연동 정산금액 */
  CALC_AMT?: Maybe<Scalars['Float']>;
  /** API 관리비 */
  SHOP_PGM_AMT?: Maybe<Scalars['Float']>;
  /** API 주문번호 */
  API_ORDER_NO?: Maybe<Scalars['String']>;
  /** 기사 실명 */
  RIDER_REAL_NAME?: Maybe<Scalars['String']>;
  /** 기사 인증 이름 */
  RIDER_CERTIFIED_NAME?: Maybe<Scalars['String']>;
  /** 기사 인증 주민번호 */
  RIDER_CERTIFIED_SOCIAL_NUMBER?: Maybe<Scalars['String']>;
  /** 기사 인증일 */
  RIDER_CERTIFIED_DATE?: Maybe<Scalars['String']>;
};

export type Entity_Cdm0623_Shop_Statistics_Result = {
  __typename?: 'ENTITY_CDM0623_SHOP_STATISTICS_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Cdm0623_Shop_Statistics>>;
};

export type Entity_Cdm0623_Shop_Statistics = {
  __typename?: 'ENTITY_CDM0623_SHOP_STATISTICS';
  /** 회원사 코드 */
  MCODE: Scalars['Float'];
  /** 회원사 이름 */
  MNAME: Scalars['String'];
  /** 지원센터 이름 */
  HELP_CENTER_NAME: Scalars['String'];
  /** 지원센터 코드 */
  HELP_CENTER: Scalars['String'];
  /** 콜센터 코드 */
  CCCODE: Scalars['String'];
  /** 콜센터 이름 */
  CCNAME?: Maybe<Scalars['String']>;
  /** 콜센터 레벨 */
  CLEVEL?: Maybe<Scalars['String']>;
  /** 콜센터 등록일 */
  CC_OPEN_DATE?: Maybe<Scalars['String']>;
  /** 콜센터 종류 */
  CCTYPE?: Maybe<Scalars['String']>;
  /** 주문 건수 */
  ORDER_COUNT?: Maybe<Scalars['Float']>;
  /** 완료 건수 */
  COMPLETE_COUNT?: Maybe<Scalars['Float']>;
  /** 재직 기사수 */
  BEING_EMPLOYED_RIDER_COUNT?: Maybe<Scalars['Float']>;
  /** 운행 기사수 */
  WORKING_RIDER_COUNT?: Maybe<Scalars['Float']>;
  /** 가맹점수 */
  SHOP_COUNT?: Maybe<Scalars['Float']>;
  /** 한식 */
  KOREAN_FOOD?: Maybe<Scalars['Float']>;
  /** 중식 */
  CHINESE_FOOD?: Maybe<Scalars['Float']>;
  /** 양식 */
  WESTERN_FOOD?: Maybe<Scalars['Float']>;
  /** 일식 */
  JAPANESE_FOOD?: Maybe<Scalars['Float']>;
  /** 치킨 */
  CHICKEN?: Maybe<Scalars['Float']>;
  /** 피자 */
  PIZZA?: Maybe<Scalars['Float']>;
  /** 족발/보쌈 */
  PORK_FEET_BOSSAM?: Maybe<Scalars['Float']>;
  /** 찜탕류 */
  STEAMED_SOUP?: Maybe<Scalars['Float']>;
  /** 회 */
  SASHIMI?: Maybe<Scalars['Float']>;
  /** 분식 */
  SNACK_BAR?: Maybe<Scalars['Float']>;
  /** 야식 */
  MIDNIGHT_SNACK?: Maybe<Scalars['Float']>;
  /** 프랜차이즈 */
  FRANCHISE?: Maybe<Scalars['Float']>;
  /** 야식 */
  ETC_FOOD?: Maybe<Scalars['Float']>;
  /** 취소 건수 */
  CANCEL_COUNT?: Maybe<Scalars['Float']>;
  /** 주문 가맹점수 */
  QORDER_SHOP_COUNT?: Maybe<Scalars['Float']>;
  /** 음식값 */
  FOOD_AMOUNT?: Maybe<Scalars['Float']>;
  /** 배송 요금 */
  CBASIC?: Maybe<Scalars['Float']>;
  /** 처리비(수수료) */
  CALL_AMOUNT?: Maybe<Scalars['Float']>;
  /** 배민ATA 취소 */
  BM_API_CANCEL_COUNT?: Maybe<Scalars['Float']>;
  /** 총 로우 갯수 */
  TOTAL_COUNT: Scalars['Float'];
  /** 로우 번호 */
  LIST_NUM: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  setSessionTest: Entity_Session_User_Test_Result;
  setLoginTest: Entity_Session_User_Test_Result;
  setManualTranMultiQuery: Entity_Callcenter_Test_Result;
  setParallelQuery: Entity_Callcenter_Test_Result;
  setExecManyQuery: Entity_Result;
  /** 로그인 */
  setLogin: Entity_Login_Result;
  /** 로그아웃 */
  setLogout: Entity_Login_Result;
  /** 기사 적립금 차감 */
  adm6360setRiderChargeAmt: Entity_Proc_Iud_Out_Result;
  /** 처리 */
  adm6370SetCalcInfoMinus: Entity_Proc_Iud_Out_Result;
  /** 앱 업데이트 설정 UPDATE */
  adm7010SetUpdateDefineUpdate: Entity_Proc_Iud_Out_Result;
  /** 앱 업데이트 설정 IUD */
  adm7010SetUpdateDefineIUD: Entity_Result;
  /** 지점별 업데이트 설정 IUD  */
  adm7010SetCallcenterUpdateIUD: Entity_Result;
  /** 지점별 앱 업데이트 설정 UPDATE */
  adm7010SetCallcenterUpdateUpdate: Entity_Proc_Iud_Out_Result;
  /** 기사 실명인증 초기화 DELETE */
  adm7020SetRiderConfirmDelete: Entity_Proc_Iud_Out_Result;
  /** 기사실명인증 초기화/실명 변경/주민번호 변경 처리  */
  adm7020SetRiderConfirmIUD: Entity_Result;
  /** 기사앱 지지기 체크 설정/전투콜 사용여부 설정 */
  adm7030SetRiderEtcConfig: Entity_Result;
  /** API 부가설정 IUD  */
  adm7050SetApiComDetailIUD: Entity_Result;
  /** 마스터코드 데이터 IUD  */
  adm7060SetMasterCodeIUD: Entity_Result;
  /** 상세코드 데이터 IUD  */
  adm7060SetCodeDetailIUD: Entity_Result;
  /** POI_INFO 데이터 IUD  */
  adm7070SetPoiInfoIUD: Entity_Result;
  /** 가맹점 멀티매핑 IUD  */
  adm7080SetMultiMappingIUD: Entity_Result;
  /** 웹 메뉴 INSERT */
  adm9010InsertWebMenu: Entity_Result;
  /** 웹 메뉴 UPDATE */
  adm9010UpdateWebMenu: Entity_Result;
  /** 웹 메뉴 DELETE */
  adm9010DeleteWebMenu: Entity_Result;
  /** 그룹 INSERT */
  adm9020InsertGroup: Entity_Result;
  /** 그룹 UPDATE */
  adm9020UpdateGroup: Entity_Result;
  /** 그룹 DELETE */
  adm9020DeleteGroup: Entity_Result;
  /** 메뉴권한 관리 - 그룹별 메뉴정보 설정/해제 */
  adm9020SetMngMenuIUD: Entity_Result;
  /** 메뉴권한 관리 - 사용자 그룹 권한 설정/해제 */
  adm9020SetMngMenuGroupUserIUD: Entity_Result;
  /** 업종 코드 INSERT */
  cdm0201InsertItemCode: Entity_Result;
  /** 업종 코드 UPDATE */
  cdm0201UpdateItemCode: Entity_Result;
  /** 업종 코드 DELETE */
  cdm0201DeleteItemCode: Entity_Result;
};


export type MutationSetSessionTestArgs = {
  EMAIL: Scalars['String'];
  USER_NAME: Scalars['String'];
  USER_ID: Scalars['String'];
};


export type MutationSetLoginTestArgs = {
  DISCONN_N_LOGIN: Scalars['Boolean'];
  EMAIL: Scalars['String'];
  USER_NAME: Scalars['String'];
  USER_ID: Scalars['String'];
};


export type MutationSetManualTranMultiQueryArgs = {
  REG_NO: Scalars['String'];
  RIDER_NAME: Scalars['String'];
  RIDER_CODE: Scalars['Float'];
  MCODE: Scalars['String'];
  CCCODE1: Scalars['String'];
  CCNAME1: Scalars['String'];
};


export type MutationSetParallelQueryArgs = {
  MCODE: Scalars['String'];
  CCCODE2: Scalars['String'];
  CCNAME2: Scalars['String'];
  CCCODE1: Scalars['String'];
  CCNAME1: Scalars['String'];
};


export type MutationSetExecManyQueryArgs = {
  DATA: Array<Entity_Exec_Many_Input_Test>;
};


export type MutationSetLoginArgs = {
  DISCONN_N_LOGIN: Scalars['Boolean'];
  USER_PASS: Scalars['String'];
  USER_ID: Scalars['String'];
};


export type MutationAdm6360setRiderChargeAmtArgs = {
  OUT_MEMO: Scalars['String'];
  OUT_AMT: Scalars['Float'];
  OUT_CODE: Scalars['String'];
  RIDER_CODE: Scalars['Float'];
};


export type MutationAdm6370SetCalcInfoMinusArgs = {
  MINUS_SEQNO: Scalars['String'];
};


export type MutationAdm7010SetUpdateDefineUpdateArgs = {
  MEMO: Scalars['String'];
  DOWN_PATH: Scalars['String'];
  VERSION_NAME: Scalars['String'];
  UPDATE_MODE: Scalars['String'];
  APP_TYPE: Scalars['String'];
  SEQNO: Scalars['Float'];
};


export type MutationAdm7010SetUpdateDefineIudArgs = {
  XML_DATA: Scalars['String'];
};


export type MutationAdm7010SetCallcenterUpdateIudArgs = {
  XML_DATA: Scalars['String'];
};


export type MutationAdm7010SetCallcenterUpdateUpdateArgs = {
  UPDATE_MODE: Scalars['String'];
  APP_TYPE: Scalars['String'];
  CCCODE: Scalars['String'];
  SEQNO: Scalars['Float'];
};


export type MutationAdm7020SetRiderConfirmDeleteArgs = {
  ARR_RIDER_CODE: Array<Scalars['Float']>;
};


export type MutationAdm7020SetRiderConfirmIudArgs = {
  XML_DATA: Scalars['String'];
};


export type MutationAdm7030SetRiderEtcConfigArgs = {
  XML_DATA: Scalars['String'];
};


export type MutationAdm7050SetApiComDetailIudArgs = {
  XML_DATA: Scalars['String'];
};


export type MutationAdm7060SetMasterCodeIudArgs = {
  XML_DATA: Scalars['String'];
};


export type MutationAdm7060SetCodeDetailIudArgs = {
  XML_DATA: Scalars['String'];
};


export type MutationAdm7070SetPoiInfoIudArgs = {
  XML_DATA: Scalars['String'];
};


export type MutationAdm7080SetMultiMappingIudArgs = {
  XML_DATA: Scalars['String'];
};


export type MutationAdm9010InsertWebMenuArgs = {
  JSON_DATA: Scalars['String'];
};


export type MutationAdm9010UpdateWebMenuArgs = {
  JSON_DATA: Scalars['String'];
};


export type MutationAdm9010DeleteWebMenuArgs = {
  JSON_DATA: Scalars['String'];
};


export type MutationAdm9020InsertGroupArgs = {
  JSON_DATA: Scalars['String'];
};


export type MutationAdm9020UpdateGroupArgs = {
  JSON_DATA: Scalars['String'];
};


export type MutationAdm9020DeleteGroupArgs = {
  JSON_DATA: Scalars['String'];
};


export type MutationAdm9020SetMngMenuIudArgs = {
  XML_DATA: Scalars['String'];
  GROUP_ID: Scalars['String'];
  WEB_GROUP: Scalars['String'];
};


export type MutationAdm9020SetMngMenuGroupUserIudArgs = {
  XML_DATA: Scalars['String'];
  GROUP_ID: Scalars['String'];
  WEB_GROUP: Scalars['String'];
};


export type MutationCdm0201InsertItemCodeArgs = {
  JSON_DATA: Scalars['String'];
};


export type MutationCdm0201UpdateItemCodeArgs = {
  JSON_DATA: Scalars['String'];
};


export type MutationCdm0201DeleteItemCodeArgs = {
  JSON_DATA: Scalars['String'];
};

export type Entity_Exec_Many_Input_Test = {
  RIDER_CODE: Scalars['Float'];
  RIDER_NAME: Scalars['String'];
  REG_NO: Scalars['String'];
};

export type Entity_Proc_Iud_Out_Result = {
  __typename?: 'ENTITY_PROC_IUD_OUT_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Proc_Iud_Out>>;
};

export type Entity_Proc_Iud_Out = {
  __typename?: 'ENTITY_PROC_IUD_OUT';
  OUT_RET_CODE?: Maybe<Scalars['String']>;
  OUT_RET_MSG?: Maybe<Scalars['String']>;
};

export type Entity_Callcenter_TesTundefined_Result = {
  __typename?: 'ENTITY_CALLCENTER_TESTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Callcenter_Test>>;
};

export type Entity_Session_User_TesTundefined_Result = {
  __typename?: 'ENTITY_SESSION_USER_TESTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Session_User_Test>>;
};

export type Entity_Shop_Info_Proc_Out_TesTundefined_Result = {
  __typename?: 'ENTITY_SHOP_INFO_PROC_OUT_TESTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Shop_Info_Proc_Out_Test>>;
};

export type Entity_User_TesTundefined_Result = {
  __typename?: 'ENTITY_USER_TESTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_User_Test>>;
};

export type Entity_Qorder_TesTundefined_Result = {
  __typename?: 'ENTITY_QORDER_TESTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Qorder_Test>>;
};

export type Entity_Static_Rider_Work_Info_TesTundefined_Result = {
  __typename?: 'ENTITY_STATIC_RIDER_WORK_INFO_TESTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Static_Rider_Work_Info_Test>>;
};

export type Entity_Api_Com_GbNundefined_Result = {
  __typename?: 'ENTITY_API_COM_GBNundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Api_Com_Gbn>>;
};

export type Entity_BanKundefined_Result = {
  __typename?: 'ENTITY_BANKundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Bank>>;
};

export type Entity_GrouPundefined_Result = {
  __typename?: 'ENTITY_GROUPundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Group>>;
};

export type Entity_CallcenteRundefined_Result = {
  __typename?: 'ENTITY_CALLCENTERundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Callcenter>>;
};

export type Entity_CodEundefined_Result = {
  __typename?: 'ENTITY_CODEundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Code>>;
};

export type Entity_Com_Gbn_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_COM_GBN_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Com_Gbn_Proc_Out>>;
};

export type Entity_Etc_CodEundefined_Result = {
  __typename?: 'ENTITY_ETC_CODEundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Etc_Code>>;
};

export type Entity_Get_Popup_Rider_List_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_GET_POPUP_RIDER_LIST_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Get_Popup_Rider_List_Proc_Out>>;
};

export type Entity_HelpcenteRundefined_Result = {
  __typename?: 'ENTITY_HELPCENTERundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Helpcenter>>;
};

export type Entity_Item_MsTundefined_Result = {
  __typename?: 'ENTITY_ITEM_MSTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Item_Mst>>;
};

export type Entity_MembershiPundefined_Result = {
  __typename?: 'ENTITY_MEMBERSHIPundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Membership>>;
};

export type Entity_Member_CallcenteRundefined_Result = {
  __typename?: 'ENTITY_MEMBER_CALLCENTERundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Member_Callcenter>>;
};

export type Entity_Popup_Callcenter_List_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_POPUP_CALLCENTER_LIST_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Popup_Callcenter_List_Proc_Out>>;
};

export type Entity_Popup_Shop_List_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_POPUP_SHOP_LIST_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Popup_Shop_List_Proc_Out>>;
};

export type Entity_Sales_MaNundefined_Result = {
  __typename?: 'ENTITY_SALES_MANundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Sales_Man>>;
};

export type Entity_ShopinfOundefined_Result = {
  __typename?: 'ENTITY_SHOPINFOundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Shopinfo>>;
};

export type Entity_Shop_Item_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_SHOP_ITEM_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Shop_Item_Proc_Out>>;
};

export type Entity_UserleveLundefined_Result = {
  __typename?: 'ENTITY_USERLEVELundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Userlevel>>;
};

export type Entity_Callcenter_TypEundefined_Result = {
  __typename?: 'ENTITY_CALLCENTER_TYPEundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Callcenter_Type>>;
};

export type Entity_LogiNundefined_Result = {
  __typename?: 'ENTITY_LOGINundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Login>>;
};

export type Entity_UtiLundefined_Result = {
  __typename?: 'ENTITY_UTILundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Util>>;
};

export type Entity_Menu_List_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_MENU_LIST_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Menu_List_Proc_Out>>;
};

export type Entity_Menu_Auth_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_MENU_AUTH_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Menu_Auth_Proc_Out>>;
};

export type Entity_Adm0010undefined_Result = {
  __typename?: 'ENTITY_adm0010undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0010>>;
};

export type Entity_Adm0010_Weekundefined_Result = {
  __typename?: 'ENTITY_adm0010_weekundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0010_Week>>;
};

export type Entity_Adm0010_Orderundefined_Result = {
  __typename?: 'ENTITY_adm0010_orderundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0010_Order>>;
};

export type Entity_Adm0010_Pieundefined_Result = {
  __typename?: 'ENTITY_adm0010_pieundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0010_Pie>>;
};

export type Entity_Adm0020undefined_Result = {
  __typename?: 'ENTITY_adm0020undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0020>>;
};

export type Entity_Adm0020Centerundefined_Result = {
  __typename?: 'ENTITY_adm0020Centerundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0020Center>>;
};

export type Entity_Adm0030undefined_Result = {
  __typename?: 'ENTITY_adm0030undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0030>>;
};

export type Entity_Adm0040undefined_Result = {
  __typename?: 'ENTITY_adm0040undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0040>>;
};

export type Entity_Adm0050_Api_CoMundefined_Result = {
  __typename?: 'ENTITY_ADM0050_API_COMundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0050_Api_Com>>;
};

export type Entity_Adm0050_Help_CenteRundefined_Result = {
  __typename?: 'ENTITY_ADM0050_HELP_CENTERundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0050_Help_Center>>;
};

export type Entity_Adm0060undefined_Result = {
  __typename?: 'ENTITY_adm0060undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0060>>;
};

export type Entity_Adm0070_First_DateSundefined_Result = {
  __typename?: 'ENTITY_ADM0070_FIRST_DATESundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0070_First_Dates>>;
};

export type Entity_Adm0070_Api_Com_Weekly_Order_CounTundefined_Result = {
  __typename?: 'ENTITY_ADM0070_API_COM_WEEKLY_ORDER_COUNTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0070_Api_Com_Weekly_Order_Count>>;
};

export type Entity_Adm0070_Help_Center_Weekly_Order_CounTundefined_Result = {
  __typename?: 'ENTITY_ADM0070_HELP_CENTER_WEEKLY_ORDER_COUNTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0070_Help_Center_Weekly_Order_Count>>;
};

export type Entity_Adm2010undefined_Result = {
  __typename?: 'ENTITY_adm2010undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm2010>>;
};

export type Entity_Adm2010Detailundefined_Result = {
  __typename?: 'ENTITY_adm2010Detailundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm2010Detail>>;
};

export type Entity_Adm2020undefined_Result = {
  __typename?: 'ENTITY_adm2020undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm2020>>;
};

export type Entity_Adm2030undefined_Result = {
  __typename?: 'ENTITY_adm2030undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm2030>>;
};

export type Entity_Adm2040undefined_Result = {
  __typename?: 'ENTITY_adm2040undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm2040>>;
};

export type Entity_Adm2050undefined_Result = {
  __typename?: 'ENTITY_adm2050undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm2050>>;
};

export type Entity_Adm2060undefined_Result = {
  __typename?: 'ENTITY_adm2060undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm2060>>;
};

export type Entity_Adm2070_Delivery_FeEundefined_Result = {
  __typename?: 'ENTITY_ADM2070_DELIVERY_FEEundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm2070_Delivery_Fee>>;
};

export type Entity_Adm2080_BodYundefined_Result = {
  __typename?: 'ENTITY_ADM2080_BODYundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm2080_Body>>;
};

export type Entity_Adm3010undefined_Result = {
  __typename?: 'ENTITY_adm3010undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm3010>>;
};

export type Entity_Adm3011undefined_Result = {
  __typename?: 'ENTITY_adm3011undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm3011>>;
};

export type Entity_Adm3012undefined_Result = {
  __typename?: 'ENTITY_adm3012undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm3012>>;
};

export type Entity_Adm6010undefined_Result = {
  __typename?: 'ENTITY_adm6010undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6010>>;
};

export type Entity_Adm6020undefined_Result = {
  __typename?: 'ENTITY_adm6020undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6020>>;
};

export type Entity_Adm6310undefined_Result = {
  __typename?: 'ENTITY_adm6310undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6310>>;
};

export type Entity_Adm6320undefined_Result = {
  __typename?: 'ENTITY_adm6320undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6320>>;
};

export type Entity_Adm6330undefined_Result = {
  __typename?: 'ENTITY_adm6330undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6330>>;
};

export type Entity_Adm6340undefined_Result = {
  __typename?: 'ENTITY_adm6340undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6340>>;
};

export type Entity_Adm6350undefined_Result = {
  __typename?: 'ENTITY_adm6350undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6350>>;
};

export type Entity_Adm6360undefined_Result = {
  __typename?: 'ENTITY_adm6360undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6360>>;
};

export type Entity_Riderinfoundefined_Result = {
  __typename?: 'ENTITY_riderinfoundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Riderinfo>>;
};

export type Entity_Proc_Iud_OuTundefined_Result = {
  __typename?: 'ENTITY_PROC_IUD_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Proc_Iud_Out>>;
};

export type Entity_Adm6370undefined_Result = {
  __typename?: 'ENTITY_adm6370undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6370>>;
};

export type Entity_Adm6380undefined_Result = {
  __typename?: 'ENTITY_adm6380undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6380>>;
};

export type Entity_Adm6380OrderInfoundefined_Result = {
  __typename?: 'ENTITY_adm6380OrderInfoundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6380OrderInfo>>;
};

export type Entity_Adm6380Revenueundefined_Result = {
  __typename?: 'ENTITY_adm6380Revenueundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6380Revenue>>;
};

export type Entity_Adm6380RevenueOwnerundefined_Result = {
  __typename?: 'ENTITY_adm6380RevenueOwnerundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6380RevenueOwner>>;
};

export type Entity_Adm6380Outlayundefined_Result = {
  __typename?: 'ENTITY_adm6380Outlayundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6380Outlay>>;
};

export type Entity_Adm6390_BodYundefined_Result = {
  __typename?: 'ENTITY_ADM6390_BODYundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm6390_Body>>;
};

export type Entity_Adm7010_Callcenter_Update_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_ADM7010_CALLCENTER_UPDATE_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7010_Callcenter_Update_Proc_Out>>;
};

export type Entity_Adm7010_Update_Define_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_ADM7010_UPDATE_DEFINE_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7010_Update_Define_Proc_Out>>;
};

export type Entity_Adm7020_Rider_Confirm_List_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_ADM7020_RIDER_CONFIRM_LIST_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7020_Rider_Confirm_List_Proc_Out>>;
};

export type Entity_Adm7030_Get_Rider_Etc_Config_List_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_ADM7030_GET_RIDER_ETC_CONFIG_LIST_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7030_Get_Rider_Etc_Config_List_Proc_Out>>;
};

export type Entity_Adm7040_Get_Card_Result_List_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_ADM7040_GET_CARD_RESULT_LIST_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7040_Get_Card_Result_List_Proc_Out>>;
};

export type Entity_Adm7050_Get_Api_Com_Detail_List_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_ADM7050_GET_API_COM_DETAIL_LIST_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7050_Get_Api_Com_Detail_List_Proc_Out>>;
};

export type Entity_Adm7060_Get_Master_Code_List_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_ADM7060_GET_MASTER_CODE_LIST_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7060_Get_Master_Code_List_Proc_Out>>;
};

export type Entity_Adm7060_Get_Code_Detail_List_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_ADM7060_GET_CODE_DETAIL_LIST_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7060_Get_Code_Detail_List_Proc_Out>>;
};

export type Entity_Adm7070_Get_Poi_Info_List_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_ADM7070_GET_POI_INFO_LIST_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7070_Get_Poi_Info_List_Proc_Out>>;
};

export type Entity_Adm7080_Get_Multi_Mapping_List_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_ADM7080_GET_MULTI_MAPPING_LIST_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm7080_Get_Multi_Mapping_List_Proc_Out>>;
};

export type Entity_Adm8110_BodYundefined_Result = {
  __typename?: 'ENTITY_ADM8110_BODYundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm8110_Body>>;
};

export type Entity_Adm8120_BodYundefined_Result = {
  __typename?: 'ENTITY_ADM8120_BODYundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm8120_Body>>;
};

export type Entity_Adm9010_Get_Web_Menu_LisTundefined_Result = {
  __typename?: 'ENTITY_ADM9010_GET_WEB_MENU_LISTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm9010_Get_Web_Menu_List>>;
};

export type Entity_Adm9020_Get_Mng_Menu_Group_User_List_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_ADM9020_GET_MNG_MENU_GROUP_USER_LIST_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm9020_Get_Mng_Menu_Group_User_List_Proc_Out>>;
};

export type Entity_Adm9020_Get_Group_LisTundefined_Result = {
  __typename?: 'ENTITY_ADM9020_GET_GROUP_LISTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm9020_Get_Group_List>>;
};

export type Entity_Adm9020_Get_Mng_Menu_List_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_ADM9020_GET_MNG_MENU_LIST_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm9020_Get_Mng_Menu_List_Proc_Out>>;
};

export type Entity_Cdm0201_Item_CodEundefined_Result = {
  __typename?: 'ENTITY_CDM0201_ITEM_CODEundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Cdm0201_Item_Code>>;
};

export type Entity_Cdm0601_Shop_InfOundefined_Result = {
  __typename?: 'ENTITY_CDM0601_SHOP_INFOundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Cdm0601_Shop_Info>>;
};

export type Entity_Cdm0603_Get_Callcount_Membership_List_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_CDM0603_GET_CALLCOUNT_MEMBERSHIP_LIST_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Cdm0603_Get_Callcount_Membership_List_Proc_Out>>;
};

export type Entity_Cdm0604_Get_Day_Cnt_Membership_List_Proc_OuTundefined_Result = {
  __typename?: 'ENTITY_CDM0604_GET_DAY_CNT_MEMBERSHIP_LIST_PROC_OUTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Cdm0604_Get_Day_Cnt_Membership_List_Proc_Out>>;
};

export type Entity_Cdm0615_Api_Com_CalculatioNundefined_Result = {
  __typename?: 'ENTITY_CDM0615_API_COM_CALCULATIONundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Cdm0615_Api_Com_Calculation>>;
};

export type Entity_Cdm0617_Api_Com_ReceipTundefined_Result = {
  __typename?: 'ENTITY_CDM0617_API_COM_RECEIPTundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Cdm0617_Api_Com_Receipt>>;
};

export type Entity_Cdm0623_Shop_StatisticSundefined_Result = {
  __typename?: 'ENTITY_CDM0623_SHOP_STATISTICSundefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Cdm0623_Shop_Statistics>>;
};
