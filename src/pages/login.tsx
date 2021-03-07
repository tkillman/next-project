import { withRouter, SingletonRouter } from '~/utils/routeLink';
import {
    Row,
    Col,
    Form,
    Label,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    Button,
    CustomInput
} from 'reactstrap';
import { useFormik } from 'formik';
import { useCookies } from 'react-cookie';

/** props */
interface IProps {
    className?: string;
    router: SingletonRouter;
}

const Login: React.FC<IProps> = ({ router }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['donggyu']);

    const userId = () => (cookies && cookies.userId ? cookies.userId : '');
    const isSaveId = () => (cookies && cookies.isSaveId === 'true' ? true : false);

    let refUrl = '/';
    console.log(router);
	if (router && router.query.refurl) {
		const { refurl} = router.query;
	}

    // formik 설정
    const formik = useFormik({
        initialValues: {
            userId: userId(),
            userPass: '',
            errorMsg: '',
            isSaveId: isSaveId()
        },
        onSubmit: async values => {
            await console.log("a");
        }
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <InputGroup className='mb-2' size='lg'>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                        <i className='ti-user'></i>
                    </InputGroupText>
                </InputGroupAddon>
                <Input
                    type='text'
                    id='userId'
                    name='userId'
                    value={formik.values.userId}
                    onChange={e => {
                        formik.handleChange(e);
                        formik.setFieldValue('errorMsg', '');
                    }}
                    placeholder='ID'
                />
            </InputGroup>
            <Button type='submit'>Log In</Button>
        </Form>
    )
}

export default withRouter(Login);