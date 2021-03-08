import { initializeStore, IStore } from '~/src/stores/rootStore';
import App, { AppContext } from 'next/app';
import { NextComponentType } from 'next';
import { Provider } from 'mobx-react';
import { getSnapshot, onPatch } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';
import { ApolloProvider } from '@apollo/client';
import withApollo from '~/utils/withApollo';
//import { ThemeProvider } from '@material-ui/core/styles';
//import theme from '../../envConfig/muiTheme';

interface IProps {
	isServer: boolean;
	initialState: IStore;
	Component: NextComponentType;
	pageProps: any;
	router: any;
	apolloClient: any;
}

class RootApp extends App<IProps> {

    public static async getInitialProps({ Component, ctx }: AppContext) {
        let pageProps = {};
		const isServer = typeof window === 'undefined';
		const store = initializeStore(isServer);

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { initialState: getSnapshot(store), isServer, pageProps };
    }

    private store: IStore;

    constructor(props: any) {
        super(props);
        this.store = initializeStore(props.isServer, props.initialState);

        // mst 디버깅 로그
		if (process.env.NODE_ENV === 'development') {
			// 크롬 console 에 해당값의 변화가 있을 때 나타나게 함
			onPatch(this.store, patch => {});

			// 크롬 mobx tools 에 MST 로 상태변화를 볼 수 있게 한다.
			makeInspectable(this.store);
		}

    }

    public componentDidMount() {
		const jssStyles = document.querySelector('#jss-server-side');

		if (jssStyles && jssStyles.parentNode) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}

    public render() {
        const { Component, pageProps, apolloClient } = this.props;
		
        return (
            <ApolloProvider client={apolloClient}>
                <Provider store={this.store}>
                    <Component {...pageProps} />
                </Provider>
            </ApolloProvider>
        )
    }    
}    

export default withApollo(RootApp);