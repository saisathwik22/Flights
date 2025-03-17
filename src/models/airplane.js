"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  // In our table, modelNumber shouldn't be NULL
  Airplane.init(
    {
      modelNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Airplane",
    }
  );
  return Airplane;
};

/* Is there any reason of giving Database level constraint?
  If someone is directly inserting something into your DB, then it's required.
  When a project of some other language interacts with the same DB, then it's better to have DB-level constraint.
  Otherwise, the program-level or Javascript-level constraints are enough.
  Models are only handled at Javascript-level.
  Migrations are actually quoting your changes to database.
*/
