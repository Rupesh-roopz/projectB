const db = require('../../db')
const { userSchema } = require('../models/user')
const signIn = async ( req, res ) => {
    try {
        const { userName, 
            email, 
            password, 
            passwordVerify, 
            phoneNumber, 
            age, 
            userProfileImage } = req.body;
            
        await userSchema()
        const result = await db.getDb().collection('users').insertOne({userName : userName, 
            email : email, 
            password : password,  
            phoneNumber : phoneNumber, 
            age : age
            });
        
            console.log(result)

    console.log(age)
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied)
    }
    
}

module.exports = { signIn }