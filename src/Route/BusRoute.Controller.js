var sequalize        = require('../DBSchema/SchemaMapper');
const BusRoute = sequalize.busRoutes;
const Bus = sequalize.busDetails;
const Staitons =sequalize.routeStations;

var RouteController = function() {

    this.getRoutes = () => {
        return new Promise((resolve, reject) => {
            BusRoute.findAll().then(busroute => {
                console.log(busroute);
                resolve({status: 200, data: busroute});
            }).catch(err => {
                reject({status: 500, message: "Error: " + err});
            })
        })
    }
    this.getBusDetails = (id) => {
        return new Promise((resolve, reject) => {
            Bus.findAll({where: { routeId : id }}).then(bus => {
                resolve({status: 200, data: bus});
            }).catch(err => {
                reject({status: 500, message: "Error: " + err});
            })
        })
    }

    this.getRouteStations = (id) => {
        return new Promise((resolve, reject) => {
            Staitons.findAll({where: { routeId : id }}).then(station => {
                resolve({status: 200, data: station});
            }).catch(err => {
                reject({status: 500, message: "Error: " + err});
            })
        })
    }


};
module.exports = new RouteController();