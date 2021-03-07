/**
 * @typedef { import("next-routes").Registry } NextRoutes
 */
const nextRoutes = require('next-routes');

/**
 * @type { NextRoutes }
 */
(module.exports = nextRoutes())
	// 페이지명, 패턴
	.add({ name: 'index', page: '/index', pattern: '/' })
	.add({ name: 'login', page: '/login', pattern: '/login' })
	.add({ name: 'loginRefurl', page: '/login', pattern: '/login/:refurl' })
	.add({
		name: '_errorRefVal',
		page: '/_error',
		pattern: '/_error/:statusCode/:errName?/:errMsg?/:errStack?'
	})
	.add({ name: '/adm2010', page: '/adm2010', pattern: '/adm2010' })
	.add({ name: '/adm2020', page: '/adm2020', pattern: '/adm2020' })
	.add({ name: '/adm2030', page: '/adm2030', pattern: '/adm2030' })
	.add({ name: '/adm2040', page: '/adm2040', pattern: '/adm2040' })
	.add({ name: '/adm2210', page: '/adm2210', pattern: '/adm2210' })
	.add({ name: '/adm6010', page: '/adm6010', pattern: '/adm6010' })
	.add({ name: '/adm6020', page: '/adm6020', pattern: '/adm6020' })
	.add({ name: '/adm6310', page: '/adm6310', pattern: '/adm6310' })
	.add({ name: '/adm6320', page: '/adm6320', pattern: '/adm6320' })
	.add({ name: '/adm6330', page: '/adm6330', pattern: '/adm6330' })
	.add({ name: '/adm6340', page: '/adm6340', pattern: '/adm6340' })
	.add({ name: '/adm6350', page: '/adm6350', pattern: '/adm6350' })
	.add({ name: '/adm6360', page: '/adm6360', pattern: '/adm6360' })
	.add({ name: '/adm7010', page: '/adm7010', pattern: '/adm7010' })
	.add({ name: '/adm7020', page: '/adm7020', pattern: '/adm7020' })
	.add({ name: '/adm7030', page: '/adm7030', pattern: '/adm7030' })
	.add({ name: '/adm7040', page: '/adm7040', pattern: '/adm7040' })
	.add({ name: '/adm7060', page: '/adm7060', pattern: '/adm7060' })
	.add({ name: '/adm7070', page: '/adm7070', pattern: '/adm7070' })
	.add({ name: '/adm9010', page: '/adm9010', pattern: '/adm9010' })
	.add({ name: '/adm9020', page: '/adm9020', pattern: '/adm9020' });

