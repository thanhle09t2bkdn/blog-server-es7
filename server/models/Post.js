module.exports = function(Sequelize, DataTypes) {
  const Post = Sequelize.define('Post', {
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
          type: DataTypes.STRING
      },
      content: {
          type: DataTypes.TEXT,
          allowNull: false,
      },
      userId: {
          type: DataTypes.UUID,
          references: {model: 'Users', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false
      },
      categoryId: {
          type: DataTypes.UUID,
          references: {model: 'Categories', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
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
  }, {});

    Post.associate = (models) => {
        Post.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'categoryId'
        });
        Post.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'userId'
        });
    };
  return Post;
};