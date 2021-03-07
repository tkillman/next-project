import { useEffect } from 'react';
import { withRouter, SingletonRouter } from '~/utils/routeLink';
import { getProcOutCursorResult } from '~/utils/viewUtils';
import { Entity_Menu_Auth } from '~/gen/graphql-types';

/** props */
interface IProps {
    router: SingletonRouter;
}

const index: React.FC<IProps> = ({ router }) => {

    const data = {
        getMenuAuth : {
            OUT_RET_CODE : "00"
            , OUT_RET_MSG : "정상"
            , OUT_RESULT : 
                [
                    { MENU_ID : "login" ,DEFAULT_URL : "/login" ,AUTH_GUBUN : "N"},
                    { MENU_ID : "adm0020" ,DEFAULT_URL : "/adm0020" ,AUTH_GUBUN : "N"}
                ]
        }
    }

    // 메뉴 권한 DATA
    const resultMenuAuthData = getProcOutCursorResult<Entity_Menu_Auth[]>({
        gqlData: data
    });

    console.log('resultMenuAuthData');
    console.log(resultMenuAuthData);

	useEffect(() => {
		// 메뉴 디폴트 URL 로 리다이렉트
		if (data) {
			const defaultUrl = resultMenuAuthData
				? resultMenuAuthData[0].DEFAULT_URL
				: '/login';

			router.push(defaultUrl);
		}
	}, [data]);

    return <></>;
}

export default withRouter(index);
