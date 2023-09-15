const express = require('express');
const keys = require('./config/keys.js');

const app = express();

//Setting up DB
const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

//Setup database models
require('./model/Account');

//Setup the routes
 require('./Routes/authenticationRoutes')(app)

const port = 3000;
app.listen(keys.port, ()=>{
    console.log("listeninng to "+ keys.port);
})