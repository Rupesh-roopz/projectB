const db = require('../../db')
const { userSchema } = require('../models/user')

const signIn = async ( req, res ) => {
    try {
        let image;
        const { name, 
            email, 
            password, 
            passwordVerify, 
            phoneNumber
        } = req.body;
        // console.log(req.file);
        // image = req.file.originalname
        // await userSchema()
        const result = await db.getDb().collection('newUser').insertOne({
            userName : name, 
            email : email, 
            password : password,  
            phoneNumber : phoneNumber, 
            });
            res.send('success')
            console.log(result)
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = { signIn }