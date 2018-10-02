var sequalize        = require('../DBSchema/SchemaMapper');
const Card = sequalize.cardDetails;

var CardController = function() {


    this.getLoan = (id, data) => {
        return new Promise((resolve, reject) => {
            Card.update(
                {balance: data.amount,
                onLoan: TRUE},
                {where: {cardId: id}}
            ).then(() => {
                resolve({status: 200, message: "Successfully granted Loan"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.updateBalance = (id, data) => {
        return new Promise((resolve, reject) => {
            Card.update(
                {balance: data.amount},
                {where: {cardId: id}}
            ).then(() => {
                resolve({status: 200, message: "Successfully updated Balance"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }


    this.search = (id) => {
        return new Promise((resolve, reject) => {
            Card.findById(id).then(card => {
                resolve({status: 200, data: card});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }
    this.searchByAccount = (id) => {
        return new Promise((resolve, reject) => {
            Card.findOne({where: {accountId: id}}).then(card => {
                resolve({status: 200, data: card});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.getBalance = (id) => {
        return new Promise((resolve, reject) => {
            Card.findOne(
                {
                    where: {accountId: id},
                    attributes: ['balance', 'onLoan']
                }
                ).then(card => {
                resolve({status: 200, data: card});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }


};
module.exports = new CardController();