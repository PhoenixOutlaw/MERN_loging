const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

//<%--
// .env file should we made for token and connection
//JWT_ACESS_TOKEN = <token>
//MONGO_CONNECTION = <mongo_url>
//--%>

mongoose.connect(process.env.MONGO_CONNECTION,(error,db) => {
    if (error) {console.log('unable to connect to Mongo')}
    else {console.log('connection established')}
})

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors())
app.use('/auth', require("./routes/auth"))
app.use('/register', require("./routes/auth/register"))

app.listen(port,() => console.log("listening on port " + port));