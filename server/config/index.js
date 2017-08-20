import DotENV from 'dotenv';
import DBConfig from '../config/db-config.json';

DotENV.config();
const db = DBConfig[process.env.NODE_ENV];

module.exports = {
	env: process.env.NODE_ENV,
	port: process.env.PORT,
	expireTime: process.env.EXPIRE_TIME,
	db: {
		username: db.username,
		password: db.password,
		database: db.database,
		host: db.port,
		dialect: db.dialect
	},
};