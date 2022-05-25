const User = require("./User");
const Monthly = require("./Monthly");
const Yearly = require("./Yearly");
const Single = require("./Single");
const Income = require("./Income");

// Creates table associations
// Sets the relationship between Users and their info
User.hasMany(Monthly, {
    foreignKey: "user_id",
});

User.hasMany(Yearly, {
    foreignKey: "user_id",
});

User.hasMany(Single, {
    foreignKey: "user_id",
});

User.hasMany(Income, {
    foreignKey: "user_id",
});

// Sets belonggTo to User
Monthly.belongsTo(User, {
    foreignKey: "user_id",
});

Yearly.belongsTo(User, {
    foreignKey: "user_id",
});

Single.belongsTo(User, {
    foreignKey: "user_id",
});

Income.belongsTo(User, {
    foreignKey: "user_id",
});


module.exports = { User, Monthly, Yearly, Single, Income };