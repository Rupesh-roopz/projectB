const express = require( 'express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const router = require('./src/routes/index');
const db = require('./db');
require('dotenv').config();

const connectionString = process.env.CONNECTION_STRING
const client = new MongoClient(connectionString);

const app = express();
app.use(cors())
const port = process.env.PORT;
app.use(express.json());

app.use('/',router())

db.initDb((err, db) => {
    if(err) console.log(err)
    else {
        app.listen(port, () => {
            console.log(`Connected to the server ${port}`);
        });
    }
})



