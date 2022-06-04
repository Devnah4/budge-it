const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Expense extends Model {}

Expense.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          expense_name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          expense_type: {
            type: DataTypes.STRING,
            allowNull: false
          },
          expense_frequency: {
              type: DataTypes.STRING,
              allowNull: false
          },
          expense_amount: {
            type: DataTypes.DECIMAL(10, 2),
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
      modelName: "expense",
    }
)

module.exports = Expense;