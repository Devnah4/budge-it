const User = require("./User");
const Expense = require('./Expense')
const Income = require("./Income");

// Creates table associations
User.hasMany(Income, {
    foreignKey: "user_id",
});

User.hasMany(Expense, {
    foreignKey: "user_id"
})
 
Income.belongsTo(User, {
    foreignKey: "user_id",
});

Expense.belongsTo(User, {
    foreignKey: "user_id"
})


module.exports = { User, Expense, Income };