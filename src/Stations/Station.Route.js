var express     = require('express');
var router      = express.Router();
var Controller  = require('./Station.Controller');

router.get('/', (req, res) => {
    //console.log(req.body);
    Controller.getStations().then(data => {
        res.status(data.status).send({message: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

module.exports = router;