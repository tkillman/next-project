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
};

export type Query = {
  __typename?: 'Query';
  /** 영업일보 오더 조회 */
  adm0020GetOrderList: Entity_Adm0020_Result;
};


export type QueryAdm0020GetOrderListArgs = {
  NAME?: Maybe<Scalars['String']>;
};

export type Entity_Adm0020_Result = {
  __typename?: 'ENTITY_adm0020_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0020>>;
};

export type Entity_Adm0020 = {
  __typename?: 'ENTITY_adm0020';
  PASSWD?: Maybe<Scalars['String']>;
  NAME?: Maybe<Scalars['String']>;
  EMAIL?: Maybe<Scalars['String']>;
  PHONE?: Maybe<Scalars['Float']>;
  STATUS?: Maybe<Scalars['String']>;
};

export type Entity_Adm0020undefined_Result = {
  __typename?: 'ENTITY_adm0020undefined_RESULT';
  OUT_RET_CODE: Scalars['String'];
  OUT_RET_MSG: Scalars['String'];
  OUT_RESULT?: Maybe<Array<Entity_Adm0020>>;
};
