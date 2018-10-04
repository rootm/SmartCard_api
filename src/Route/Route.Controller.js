var sequalize        = require('../DBSchema/SchemaMapper');
const Route = sequalize.busRoutes;
const Bus = sequalize.busDetails;

var RouteController = function() {




    this.getRoutes = () => {
        return new Promise((resolve, reject) => {
            Route.findAll().then(route => {
                resolve({status: 200, data: route});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }
    this.getBusDetails = (id) => {
        return new Promise((resolve, reject) => {
            Bus.findAll({where: { routeId : id }}).then(bus => {
                resolve({status: 200, data: bus});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }


};
module.exports = new RouteController();