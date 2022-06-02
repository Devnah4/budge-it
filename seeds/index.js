// Sets sequelize for use
const sequelize = require('../config/connection');

// Variables for the seeds
const seedUser = require('./user-seeds');
const seedMonthly = require('./monthly-seeds');



const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedMonthly();
  console.log('\n----- MONTHLY SEEDED -----\n');

  process.exit(0);
};

seedAll();