const db = require('../../db');

const userSchema = async () => { 
     try {
        await db.getDb().command({
            collMod : 'users',
            validator : {
                $jsonSchema : {
                    bsonType : 'object',
                    required : ['userName', 
                        'email', 
                        'password',  
                        'phoneNumber', 
                        'age'],
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
                            bsonType : 'Number'
                        },
                        age : {
                            bsonType : 'Number'
                        }
                    }   
                }
            },
        })
    } catch (error) {
        console.log('error')
    }
}

module.exports = { userSchema }