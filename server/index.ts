import next from 'next';
import routes from '../envConfig/routes';
import Express from 'express';
import dotenv from 'dotenv';
//import { logger } from '../src/utils/loggerUtils';
//import { IErrorInfo } from '../src/@types/errorInfo';

// env 파일 설정 불러오기
dotenv.config();

const port = parseInt(process.env.PORT || '3001', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
	const server = Express();

	server.use(Express.json());

	// 에러 로그 처리
	server.post('/error', (req, res) => {
		try {
			//const errorInfo: IErrorInfo = req.body;

			// 로그 파일에 기록
			//logger.error(`[${errorInfo.statusCode} ${errorInfo.errName}] - ${JSON.stringify(errorInfo)}`);

			res.send('success');
		} catch (ex) {
			res.send('failed');
		}
	});

	server.use(handler).listen(port, err => {
		if (err) {
			throw err;
		}

		console.log(`> Ready on http://localhost:${port}`);
	});
});
