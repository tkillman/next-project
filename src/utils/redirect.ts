import Router from 'next/router';

export default (context: any, target: string) => {
	// 서버실행
	if (context.res) {
		context.res.writeHead(303, { Location: target });
		context.res.end();
	}
	// 클라이언트 실행
	else {
		Router.replace(target);
	}
};
