const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Yearly extends Model {}

Yearly.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    yearly_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    yearly_amount: {
      type: DataTypes.INTEGER,
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
    expense_type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "yearly",
  }
);

module.exports = Yearly;
