
const SOCKET_TIME_OUT_MS = 1000000;
const CONNECTION_TIMEOUT_MS = 1000000;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//config db
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//connect to the db

let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    server: {
        socketOptions: {
            socketTimeoutMS: SOCKET_TIME_OUT_MS,
            connectTimeoutMS: CONNECTION_TIMEOUT_MS
        }
    } 
};

mongoose.connect(dbConfig.url, 
    options
).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

let fs = require("fs");

app.use(bodyParser.urlencoded({
    extended: true
}))


//app.use(bodyParser.json())

/*
app.put() ('/addUser', (req, res) => {

});*/

app.get('/', (req, res) => {
    res.json({
        "message": "Welcome to our website"
    });
});


/*
app.put('/putUser', function (req, res) {
    let userName =
    let password =
})

app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})*/

require('./app/routes/user.routes.js')(app);

let server = app.listen(8081, function () {
    let host = server.address().address
    let port = server.address().port
    console.log("Listening at http://%s:%s", host, port)
})

const serverOptions = {
    poolSize: 100,
    socketOptions: {
        socketTimeoutMS: 60000000
    }
};