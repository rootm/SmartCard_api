var sequalize        = require('../DBSchema/SchemaMapper');
const journeys = sequalize.customerJourney;

var CardController = function() {

    this.addJourney = ( data) => {
        return new Promise((resolve, reject) => {
            journeys.create(
                {
                    accountId: data.accountId,
                    routeId: data.routeId,
                    startStation: data.startStation,
                    endStation: data.endStation,
                    date: data.date,
                    startTime: data.startTime,
                    endTime: data.endTime,
                    cost: data.cost
                }
            ).then(() => {
                resolve({status: 200, message: "Successfully added Journey"});
            }).catch(err => {
                reject({status: 500, message: "Error:" + err});
            })
        })
    }


    this.getJourneys = (id) => {
        return new Promise((resolve, reject) => {
            journeys.findAll({where: {accountId: id}}).then(journey => {
                resolve({status: 200, data: journey});
            }).catch(err => {
                reject({status: 500, message: "Error:" + err});
            })
        })
    }





};
module.exports = new CardController();