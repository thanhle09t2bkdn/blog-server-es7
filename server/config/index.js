import DotENV from 'dotenv';
import DBConfig from '../config/db-config.json';
import Config from '../config/config.json';

DotENV.config();
module.exports = {
	env: process.env.NODE_ENV,
	port: process.env.PORT,
	expireTime: process.env.EXPIRE_TIME,
	dbConfig: DBConfig[process.env.NODE_ENV],
};