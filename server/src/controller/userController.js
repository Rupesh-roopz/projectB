// const UserData = require('../models/usersData')
const UserData = require('../models/usersData');


signIn = (req, res) => {
    const { name, email, password,
        passwordVerify, collegeName, phone, age, bio } = req.body
    
}

module.exports = { signIn }