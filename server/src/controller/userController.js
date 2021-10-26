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
        // const image = req.file.originalname
        // await userSchema()
        const result = await db.getDb().collection('newUser').insertOne({
            userName : name,
            email : email,
            password : password,
            phoneNumber : phoneNumber,
            profileImage : image
            });
            res.send('success')
            console.log(result)
    } catch (error) {
        console.log(error)
    }
    
}

const logIn = async ( req, res) => {
    const { email, password } = req.body

    const result = await db.getDb().collection('newUser').findOne({
        email : email,
        password : password
    })

    if(result) {
        console.log(result)
        return res.status(200).send('Login Successfull')
    } 
    return res.status(400).send('Invalid Credentials');
}

module.exports = { signIn, logIn }