import DotENV from 'dotenv';
import DBConfig from '../config/db-config.json';
import Config from '../config/config.json';
import Swagger from '../config/swagger.json';

DotENV.config();
const env = process.env.NODE_ENV;
module.exports = {
	env,
	port: process.env.PORT,
	expireTime: process.env.EXPIRE_TIME,
	dbConfig: DBConfig[process.env.NODE_ENV],
    swagger: Swagger[env],

};