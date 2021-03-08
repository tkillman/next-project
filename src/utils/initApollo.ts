
import {
	ApolloClient,
	InMemoryCache,
	NormalizedCacheObject,
	ApolloLink,
	createHttpLink
} from '@apollo/client'
import { Router } from 'next/router';
import isBrowser from './isBrowser';
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

interface IOptions {
	getToken: () => string;
}

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;
const isDev = process.env.NODE_ENV === 'development';

const create = (router: Router, initialState: any, { getToken }: IOptions) => {
    	// Apollo GraphQL 서버 URL 세팅
	const httpLink = createHttpLink({
		uri: process.env.API_SERVER_URL,
		credentials: 'include'
		// 종류: omit(생략), include(다른 도메인일 경우), same-origin(같은 도메인일 경우)
		// credentials: 'same-origin'
	});

    const authLink = setContext((req, { headers }) => {
        const token = getToken();
        return {
            headers: {
                ...headers,
                cookie: token ? `qid=${token}` : ''
                // authorization: token ? `Bearer ${token}` : ''
            }
        };
    });

     const errorLink = onError(
		({ response, graphQLErrors, networkError, operation, forward }) => {
            if (graphQLErrors) {
                console.log('graphQLErrors');
            }
    });

    let apolloLink = [errorLink, authLink, httpLink] as ApolloLink[];

    return new ApolloClient({
		connectToDevTools: isBrowser,
		ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
		link: ApolloLink.from(apolloLink),
		cache: new InMemoryCache().restore(initialState || {})
	});
}    



const initApollo = (
	router: Router,
	initialState: any,
	options: IOptions
) => {
	// Make sure to create a new client for every server-side request so that data
	// isn't shared between connections (which would be bad)
	if (!isBrowser) {
		return create(router, initialState, options);
	}

	// Reuse client on the client-side
	if (!apolloClient) {
		apolloClient = create(router, initialState, options);
	}

	return apolloClient;
};

export default initApollo;