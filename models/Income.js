const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Income extends Model {}

Income.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    income_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    income_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    income_frequency: {
      type: DataTypes.STRING,
      allowNull: false
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
    modelName: "income",
  }
);

module.exports = Income;
