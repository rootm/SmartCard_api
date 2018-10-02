var express =require('express');
var AccountRoute = require('./src/Account/Account.Route');
var CardRoute = require('./src/Card/CardDetails.Route');
var JourneyRoute = require('./src/Journey/Journey.Route');

const Routes = express.Router();
Routes.use('/accounts/',AccountRoute);
Routes.use('/card/',CardRoute);
Routes.use('/journey/', JourneyRoute);

module.exports =Routes;
