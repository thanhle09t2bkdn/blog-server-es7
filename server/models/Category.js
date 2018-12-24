module.exports = function (Sequelize, DataTypes) {
    const Category = Sequelize.define('Category', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defautValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defautValue: DataTypes.NOW
        },
        deletedAt: {
            type: DataTypes.DATE,
        }
    }, {
        defaultScope: {
            attributes: {exclude: ['deletedAt']}
        }
    });

    Category.associate = (models) => {
        Category.hasMany(models.Post, {
            foreignKey: 'categoryId',
            as: 'posts'
        });
    };
    return Category;
};