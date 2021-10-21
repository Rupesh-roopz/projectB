const express = require('express');
const router = express.Router();
const user = require('../controller/userController')
const multer = require('multer')

const fileStorageEngine = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './images');
    },
    filename : (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({storage : fileStorageEngine});

router
    .route('/signIn')
    .post(upload.single('image'),(req, res) => {
        user.signIn(req, res);
    });


module.exports = router