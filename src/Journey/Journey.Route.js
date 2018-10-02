var express     = require('express');
var router      = express.Router();
var Controller  = require('./Journey.Controller');

router.put('/', (req, res) => {
    console.log(req.body);
    Controller.addJourney(req.body).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});



router.get('/:id', (req, res) => {
    Controller.getJourneys(req.params.id).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});




module.exports = router;