import { NextPageContext } from 'next';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export interface INextContextWithApollo extends NextPageContext {
	apolloClient: ApolloClient<NormalizedCacheObject>;
}