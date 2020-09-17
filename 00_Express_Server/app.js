const express = require('express');  //load the express

const app = express();              //Initialize the express

const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./api/apiRouter');

const hostName = '127.0.0.1';
const port = 3000;

//configuration bodyParser
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({extended : false});
app.use(jsonParser);
app.use(urlEncodedParser);

//configuration of cors
app.use(cors());

//configure the Router
app.use('/api', apiRouter);


//get
app.get('/', (request, response) => {
    response.send(`<h2>Welcome to Express Server of Employee Portal</h2>`)
});

app.listen(port, hostName, () => {
    console.log(`Express Server is Started at http://${hostName}:${port}`);
});



