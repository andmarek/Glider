const SOCKET_TIME_OUT_MS = 1000000;
const CONNECTION_TIMEOUT_MS = 1000000;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

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
            socketTimeoutMS: 100,
            connectTimeoutMS: 100 
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


app.get('/', (req, res) => {
    res.json({
        "message": "Welcome to Glider"
    });
});


require('./app/routes/user.routes.js')(app);
require('./app/routes/event.routes.js')(app);

let server = app.listen(8081, function () {
    let host = server.address().address
    let port = server.address().port
    console.log("Listening at http://%s:%s", host, port)
})
/*
const serverOptions = {
    poolSize: 100,
    socketOptions: {
      socketTimeoutMS: 6000000
    }
  };
 */