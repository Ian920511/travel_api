'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    underscored: true,
  });
  User.associate = function(models) {
    // associations can be defined here
     User.hasMany(models.Comment, { foreignKey: 'userId' })

     User.belongsToMany(models.Viewpoint, {
        through: models.Favorite,  
        foreignKey: 'userId',
        as: 'FavoritedViewpoint'
      })
  };
  return User;
};