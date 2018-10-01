const Sequelize = require('sequelize');


const config    = require(  '../../config/config.json');
const db        = {};


    const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, config.development);


sequelize.connectionManager.pool.start();
sequelize.sync();
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.log('Unable to connect to the database:', err);
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Import Models such that I can use them in the api just by importing 'db'
db.accountDetails = require('../models/accountDetails')(sequelize, Sequelize);
db.stations = require('../models/stations')(sequelize, Sequelize);
db.busRoutes = require('../models/busRoutes')(sequelize, Sequelize);
db.busDetails = require('../models/busDetails')(sequelize, Sequelize);
db.routeStations = require('../models/routeStations')(sequelize, Sequelize);
db.cardDetails = require('../models/cardDetails')(sequelize, Sequelize);
db.customerJourney = require('../models/customerJourney')(sequelize, Sequelize);


module.exports = db;