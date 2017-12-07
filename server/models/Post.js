module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: {
          type: DataTypes.UUID,
          references: { model: 'User', key: 'id' }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          Post.hasOne(models.User);
      }
    }
  });
  return Post;
};