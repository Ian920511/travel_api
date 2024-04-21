'use strict';
module.exports = (sequelize, DataTypes) => {
  const Viewpoint = sequelize.define('Viewpoint', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Viewpoint.associate = function(models) {
    // associations can be defined here
    Viewpoint.belongsTo(models.Category, { foreignKey: 'categoryId' })
    Viewpoint.hasMany(models.Comment, { foreignKey: 'viewpointId' })
  };
  return Viewpoint;
};