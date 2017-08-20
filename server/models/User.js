const Bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {

	let User = sequelize.define('User', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING(50),
			allowNull: false,
			unique: true,
		},
		email: {
			type: DataTypes.STRING(50),
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		role: {
			type: DataTypes.ENUM('ADMIN', 'NORMAL_USER'),
			defaultValue: 'NORMAL_USER',
		},
	}, {
		classMethods: {
			associate: (models) => {
				// associations can be defined here
			},
			generateHash(password) {
				return Bcrypt.hashSync(password, Bcrypt.genSaltSync(8), null);
			},
		},
		instanceMethods: {
			validatePassword: function (password) {
                if (Bcrypt.compareSync(password, this.password))
                    return true;
                else
                    return false;
			},
			toJSON: function () {
				let values = Object.assign({}, this.get());
				delete values.password;
				return values;
			},
		},
		hooks: {
			beforeCreate: function (user, options) {
				if (user.changed('password')) {
					user.password = this.generateHash(user.password);
				}
			},
			beforeUpdate: function (user, options) {
				if (user.changed('password')) {
					user.password = this.generateHash(user.password);
				}
			},
		},
		privateColumns: ['password'],
	});
	return User;

};