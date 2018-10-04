var express =require('express');
var AccountRoute = require('./src/Account/Account.Route');
var CardRoute = require('./src/Card/CardDetails.Route');
var JourneyRoute = require('./src/Journey/Journey.Route');
var BusRoute = require('./src/Route/BusRoute.Route');
var Stations = require('./src/Stations/Station.Route');

const Routes = express.Router();
Routes.use('/accounts/',AccountRoute);
Routes.use('/card/',CardRoute);
Routes.use('/journey/', JourneyRoute);
Routes.use('/routes/', BusRoute);
Routes.use('/stations/', Stations);
module.exports =Routes;
