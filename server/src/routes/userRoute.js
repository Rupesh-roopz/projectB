const express = require('express');
const router = express.Router();
const user = require('../controller/userController')

router
    .route('/signIn')
    .post((req, res) => {
        user.signIn(req, res);
    });


module.exports = router