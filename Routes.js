var express =require('express');
var AccountRoute = require('./src/Account/Account.Route');

const Routes = express.Router();
Routes.use('/accounts/',AccountRoute);

module.exports =Routes;
