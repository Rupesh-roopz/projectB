const { MongoClient } = require('mongodb');
require('dotenv').config();

const connectionString = process.env.CONNECTION_STRING
let _db;

const initDb = callback => {
    if(_db) {
        console.log('database already initialised');
        return callback( null, _db);
    }
    MongoClient.connect(connectionString)
        .then( client => {  
            _db = client.db();
            callback(null, _db);
        })
        .catch( err => callback('err'))
}

const getDb = () => {
    if(!_db) 
    throw Error(' Database not initialised');

    return _db;
}

module.exports = {
    initDb,
    getDb
}