const express = require('express');
const router = express.Router();
const user = require('../controller/userController')
const multer = require('multer')

const fileStorageEngine = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, '../client/public/uploads');
    },
    filename : (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({storage : fileStorageEngine});

router
    .route('/signin')
    .post(upload.single('profileImage'),(req, res) => {
        user.signIn(req, res);
    });

    router
    .route('/login')
    .post((req, res) =>     {
        user.logIn(req, res);
    });

module.exports = router