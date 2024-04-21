'use strict';
module.exports = (sequelize, DataTypes) => {
  const Viewpoint = sequelize.define('Viewpoint', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Viewpoint.associate = function(models) {
    // associations can be defined here
    Viewpoint.belongsTo(models.Category, { foreignKey: 'categoryId' })
  };
  return Viewpoint;
};