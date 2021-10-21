const express = require('express');
const app = express();

const users = require('./userRoute')

const router = () => {
    app.use('/user', users);

    return app
}

module.exports = router