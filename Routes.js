var express =require('express');
var AccountRoute = require('./src/Account/Account.Route');
var CardRoute = require('./src/Card/CardDetails.Route');

const Routes = express.Router();
Routes.use('/accounts/',AccountRoute);
Routes.use('/card/',CardRoute);

module.exports =Routes;
