// main starting point of application 
const express       = require('express'); 
const http          = require('http');
const bodyParser    = require('body-parser');
const morgan        = require ('morgan');
const app           = express(); 
const router        = require('./router');
const mongoose      = require('mongoose');



// DB setup
mongoose.connect('mongodb://localhost:auth/auth');

// App set up 
// middlewear setup 
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'})); // parses requests as only json formatted 

router(app);

// Server Setup 
//const port = process.env.PORT || 3001; 
const port = 3000;
const server = http.createServer(app);
server.listen(port);
console.log('Server Listening on Port:' + port);