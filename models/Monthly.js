const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Monthly extends Model {}

Monthly.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    monthly_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monthly_amount: {
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
    modelName: "monthly",
  }
);

module.exports = Monthly;
