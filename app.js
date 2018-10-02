const Express = require('express');
const Cors = require('cors');
const bodyParser = require('body-parser');
var Routes = require('./Routes');
var port =process.env.PORT || 5040;



const app = Express();

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(Cors());
app.use('/',Routes);


app.listen(port,'localhost', (error) => {
    if (error){
        console.log(error);
        process.exit(-1);

    }

    console.log("Server running on " + port);
})