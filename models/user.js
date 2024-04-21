'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN
  }, {
    underscored: true,
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};