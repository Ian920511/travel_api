'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    text: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    viewpointId: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Viewpoint, { foreignKey: 'viewpointId' })
    Comment.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Comment;
};