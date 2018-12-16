import Bcrypt from 'bcrypt';

const Roles = {
	ADMN: 'ADMIN',
	USER: 'USER',
}
module.exports = (Sequelize, DataTypes) => {

	const User = Sequelize.define('User', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM(Object.values(Roles)),
            defaultValue: Roles.USER,
        },
        createdAt: {
            defaultValue: DataTypes.NOW,
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        deletedAt: {
            type: DataTypes.DATE,
        }
	}, {});
    User.associate = (models) => {
        User.hasMany(models.Post, {
            foreignKey: 'userId',
            as: 'posts'
        });
    };

    User.generateHash = async (password) => {
        return await Bcrypt.hash(password, 8);
    };
    User.prototype.comparePassword = async (password) => {
        return await Bcrypt.compare(password, this.dataValues.password);
    };

    User.beforeCreate(async (user, options) => {
        if (user.changed('password')) {
            user.password = await User.generateHash(user.password);
        }
        return user;
    });
    User.beforeUpdate(async (user, options) => {
        if (user.changed('password')) {
            user.password = await User.generateHash(user.password);
        }
        return user;
    });
	User.Roles = Roles;
	return User;

};