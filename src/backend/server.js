const SOCKET_TIME_OUT_MS = 1000000;
const CONNECTION_TIMEOUT_MS = 1000000;

let fs = require("fs");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());


const https = require('https');
/*
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};*/


//config db
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//connect to the db

let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    server: {
       key: fs.readFileSync('key.pem'),
       cert: fs.readFileSync('cert.pem'),

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

/*https.createServer({
       key: fs.readFileSync('key.pem'),
       cert: fs.readFileSync('cert.pem'),
     function() {
        console.log("started server");
    }
    
}, app).listen(8081);*/

/*https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
  }).listen(8000);*/


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
