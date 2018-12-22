import DotENV from 'dotenv';
import DBConfig from '../config/db-config.json';
import Config from '../config/config.json';
import Swagger from '../config/swagger.json';

DotENV.config();
const env = process.env.NODE_ENV;
module.exports = {
	env,
	port: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRATION_MINUTES: process.env.JWT_EXPIRATION_MINUTES,
	dbConfig: DBConfig[process.env.NODE_ENV],
    swagger: Swagger[env],

};