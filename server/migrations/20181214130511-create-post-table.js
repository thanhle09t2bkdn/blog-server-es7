'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Posts', {
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
                type: Sequelize.STRING
            },
            content: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            userId: {
                type: Sequelize.UUID,
                references: {model: 'Users', key: 'id'},
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: false
            },
            categoryId: {
                type: Sequelize.UUID,
                references: {model: 'Categories', key: 'id'},
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
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
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Posts');
    }
};