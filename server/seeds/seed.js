const db = require('../config/connection');
const { Profile } = require('../models');
const profileSeeds = require('./profileSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

// db.once('open', async () => {
//   await Tech.deleteMany({});

//   const technologies = await Tech.insertMany(techData);

//   console.log('Technologies seeded!');
//   process.exit(0);
// });
