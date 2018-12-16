'use strict';
module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			username: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false,
			},
            firstName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            lastName: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
            },
            avatar: {
                type: Sequelize.STRING,
            },
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			role: {
				type: Sequelize.ENUM('ADMIN', 'USER'),
				defaultValue: 'USER',
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
		return queryInterface.dropTable('Users');
	}
};