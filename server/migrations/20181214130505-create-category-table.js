'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('Categories', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            image: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DATE,
                defautValue: Sequelize.NOW
            },
            updatedAt: {
                type: Sequelize.DATE,
                defautValue: Sequelize.NOW
            },
            deletedAt: {
                type: Sequelize.DATE,
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('Categories');
    }
};