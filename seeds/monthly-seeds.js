// Sets the User model to be used
const { Monthly } = require("../models/monthly");

// creates an array of user data that submits to the database
const monthlyData = [
    {
        monthly_name: "water",
        monthly_amount: "20.00",
        expense_type: "utilities",
        user_id: 1,
    },
    {
        monthly_name: "electricity",
        monthly_amount: "120.00",
        expense_type: "utilities",
        user_id: 1,
    },
    {
        monthly_name: "Food",
        monthly_amount: "200.00",
        expense_type: "Groceries",
        user_id: 1,
    },
];

// Creates the seed data to allow transfer of data to the database
const seedMonthly = () => Monthly.bulkCreate(monthlyData);

// exports the seedUser function
module.exports = seedMonthly;