const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Single extends Model {}

Single.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    single_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    single_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expense_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "single",
  }
);

module.exports = Single;
