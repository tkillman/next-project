import React from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import initApollo from './initApollo';
import cookie from 'cookie';

function parseCookies(req?: any, options = {}) {
	return cookie.parse(req ? req.headers.cookie || '' : document.cookie, options);
}

const withApollo = (App: any) => {

    return class WithData extends React.Component {


        public apolloClient: ApolloClient<NormalizedCacheObject>;

        constructor(props: any) {
			super(props);

			// `getDataFromTree` renders the component first, the client is passed off as a property.
			// After that rendering is done using Next's normal rendering pipeline
			this.apolloClient = initApollo(props.router, props.apolloState, {
				getToken: () => {
					return parseCookies().token;
				}
			});
		}

		public render() {
			return <App {...this.props} apolloClient={this.apolloClient} />;
		}
    }    
}

export default withApollo;