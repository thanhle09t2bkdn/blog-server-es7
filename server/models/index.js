'use strict';

const FS = require('fs-extra');
const Path = require('path');
const Sequelize = require('sequelize');
const {dbConfig, env} = require('../config');

const basename = Path.basename(module.filename);

let db = {};
if (env !== 'development') {
    dbConfig.logging = false;
}
let sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);
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
db.Op = Sequelize.Op;
module.exports = db;
