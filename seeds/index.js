// Sets sequelize for use
const sequelize = require('../config/connection');

// Variables for the seeds
const seedUser = require('./user-seeds');



const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedAll();