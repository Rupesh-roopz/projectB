const db = require('../../db');

const userSchema = async () => { 
     try {
        await db.getDb().command({
            collMod : 'userss',
            validator : {
                $jsonSchema : {
                    bsonType : 'object',
                    required : [
                        'userName', 
                        'email', 
                        'password',  
                        'phoneNumber', 
                        'age'
                    ],
                    properties : {
                        userName: {
                            bsonType: 'string'
                        },
                        email : {
                            bsonType : 'string'
                        },
                        password : {
                            bsonType : 'string'
                        },
                        phoneNumber : {
                            bsonType : 'long'
                        },
                        age : {
                            bsonType : 'int'
                        }, 
                        userProfileImage : {
                            bsonType : 'string'
                        }
                    }   
                }
            },
            validationLevel: "moderate"
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { userSchema }