'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tasks1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tasks1.init({//fields
    taskName: DataTypes.STRING,
    isComplete: DataTypes.BOOLEAN
  }, {//options
    sequelize,
    modelName: 'tasks1',
  });
  return tasks1;
};