var sequalize        = require('../DBSchema/SchemaMapper');

const Station =sequalize.stations;

var StationsController = function() {


    this.getStations = ()=> {
        return new Promise((resolve, reject) => {
            Station.findAll().then(station => {
                resolve({status: 200, data: station});
            }).catch(err => {
                reject({status: 500, message: "Error: " + err});
            })
        })
    }


};
module.exports = new StationsController();