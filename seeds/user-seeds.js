// Sets the User model to be used
const { User } = require("../models/user");

// creates an array of user data that submits to the database
const userData = [
    {
        username: "admin",
        email: "admin@email.com",
        password: "password",
    },
    {
        username: "user",
        email: "user@email.com",
        password: "password",
    },
    {
        username: "user2",
        email: "test@user.com",
        password: "password",
    },
];

// Creates the seed data to allow transfer of data to the database
const seedUser = () => User.bulkCreate(userData);

// exports the seedUser function
module.exports = seedUser;