'use strict';

const FS = require('fs');
const Path = require('path');
const Sequelize = require('sequelize');
const DB = require('../config/db-config.json');

const basename = Path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const connection = DB[env];
let db = {};
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);
FS.readdirSync(__dirname).filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== basename) &&
        (file.slice(-3) === '.js');
}).forEach(function (file) {
    let model = sequelize['import'](Path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;

module.exports = db;
