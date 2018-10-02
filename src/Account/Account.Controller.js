var sequalize        = require('../DBSchema/SchemaMapper');
const Account= require('../models/accountDetails');

var AccountController = function() {

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            sequalize.accountDetails.update(
                {firstName: data.firstName},
                {where: {accountId: id}}
            ).then(() => {
                resolve({status: 200, message: "Successfully updated"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            sequalize.accountDetails.findAll().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            sequalize.accountDetails.findById(id).then(user => {
                resolve({status: 200, data: user});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.authenticate = (data) => {
        return new Promise((resolve, reject) => {
            sequalize.accountDetails.findByOne({where:{ identificationNo: data.userName , password: data.password}}).then(user => {
                resolve({status: 200, data: user});
            }).catch(err => {
                reject({status: 500, message: "Error: " + err});
            })
        })
    }

};
module.exports = new AccountController();