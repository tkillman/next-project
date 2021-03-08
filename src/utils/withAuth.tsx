import React from 'react';
import { NextPage } from 'next';
import redirect from '~/utils/redirect';
import { INextContextWithApollo } from '~/types/nextContext';

interface IState {
	isOpen: boolean;
	defaultUrl: string;
	modalBodyContents: string;
}

const withAuth = <T, K extends object>(
	AppComponent: NextPage<T, K>,
	menuAuthCheck: boolean = true
) => {

    return class AuthComponent extends React.Component<T, IState> {
        
        public static async getInitialProps({apolloClient, ...ctx} : INextContextWithApollo){
            let appProps = {};

            if (AppComponent.getInitialProps) {
                const initProps = {
					apolloClient,
					...ctx
				};
                appProps = await AppComponent.getInitialProps(initProps);
            }

            const res = {};

            //const refUrl = !!ctx.pathname ? ctx.pathname : '';
            return {
                ...appProps
                //,loginInfo: res.data.getLoginSession.OUT_RESULT[0],
                //menuAuth: resultMenuAuthData ? resultMenuAuthData[0] : null
            };

        }
        
        
        public constructor(props) {
            super(props);
            this.state = {
                isOpen : true
                ,defaultUrl : '/login'
                , modalBodyContents : ''
            }
        }
        
        public render() {
            return(
                <>
                    {<AppComponent {...this.props} />}
                </>
            )
        }
    };
};

export default withAuth;