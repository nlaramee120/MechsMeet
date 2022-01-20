const db = require('../config/connection');
const { Profile, Service } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const serviceSeeds = require('./serviceSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Service.deleteMany({});
    await Service.create(serviceSeeds);
    await Profile.create(profileSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
