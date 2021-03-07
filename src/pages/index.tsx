import { useEffect } from 'react';
import { withRouter, SingletonRouter } from '~/utils/routeLink';

/** props */
interface IProps {
	router: SingletonRouter;
}

const index: React.FC<IProps> = ({router}) => {
    useEffect(() => {
        const defaultUrl = '/login';

        router.push(defaultUrl);
    })    

    return <></>;
}

export default withRouter(index);
