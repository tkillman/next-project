import * as Types from '../../generated/graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type Adm0020GetOrderListQueryVariables = Types.Exact<{
  NAME?: Types.Maybe<Types.Scalars['String']>;
}>;


export type Adm0020GetOrderListQuery = (
  { __typename?: 'Query' }
  & { adm0020GetOrderList: (
    { __typename?: 'ENTITY_adm0020_RESULT' }
    & Pick<Types.Entity_Adm0020_Result, 'OUT_RET_CODE' | 'OUT_RET_MSG'>
    & { OUT_RESULT?: Types.Maybe<Array<(
      { __typename?: 'ENTITY_adm0020' }
      & Pick<Types.Entity_Adm0020, 'PASSWD' | 'NAME' | 'EMAIL' | 'PHONE' | 'STATUS'>
    )>> }
  ) }
);


export const Adm0020GetOrderListDocument = gql`
    query adm0020GetOrderList($NAME: String) {
  adm0020GetOrderList(NAME: $NAME) {
    OUT_RET_CODE
    OUT_RET_MSG
    OUT_RESULT {
      PASSWD
      NAME
      EMAIL
      PHONE
      STATUS
    }
  }
}
    `;

/**
 * __useAdm0020GetOrderListQuery__
 *
 * To run a query within a React component, call `useAdm0020GetOrderListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdm0020GetOrderListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdm0020GetOrderListQuery({
 *   variables: {
 *      NAME: // value for 'NAME'
 *   },
 * });
 */
export function useAdm0020GetOrderListQuery(baseOptions?: Apollo.QueryHookOptions<Adm0020GetOrderListQuery, Adm0020GetOrderListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Adm0020GetOrderListQuery, Adm0020GetOrderListQueryVariables>(Adm0020GetOrderListDocument, options);
      }
export function useAdm0020GetOrderListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Adm0020GetOrderListQuery, Adm0020GetOrderListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Adm0020GetOrderListQuery, Adm0020GetOrderListQueryVariables>(Adm0020GetOrderListDocument, options);
        }
export type Adm0020GetOrderListQueryHookResult = ReturnType<typeof useAdm0020GetOrderListQuery>;
export type Adm0020GetOrderListLazyQueryHookResult = ReturnType<typeof useAdm0020GetOrderListLazyQuery>;
export type Adm0020GetOrderListQueryResult = Apollo.QueryResult<Adm0020GetOrderListQuery, Adm0020GetOrderListQueryVariables>;