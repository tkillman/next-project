const  = require('dotenv');
const dotEnvResult = dotenv.config();
const parsedVariables = dotEnvResult.parsed || {};
const dotEnvVariables = {};

for (const key of Object.keys(parsedVariables)) {
	dotEnvVariables[key] = process.env[key];
}

module.exports = dotEnvVariables;
