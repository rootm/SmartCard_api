var express     = require('express');
var router      = express.Router();
var Controller  = require('./BusRoute.Controller');

router.get('/', (req, res) => {
    //console.log(req.body);
    Controller.getRoutes().then(data => {
        res.status(data.status).send({message: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});



router.get('/bus/:id', (req, res) => {
    Controller.getBusDetails(req.params.id).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});




module.exports = router;