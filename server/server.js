const express = require( 'express');
const cors = require('cors');
const router = require('./src/routes/index')
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const connectionString = process.env.CONNECTION_STRING
app.use(express.json());

app.use('/',router())

app.listen(port, () => {
    console.log(`Connected to the server ${port}`);
} );


