const {MongoClient} = require('mongodb')
require('dotenv').config();

const connection = process.env.CONNECTION_STRING;

let client;
let db;

const connectDb = async ()=>{
    if(client){
        return db;
    }

    try{
        client = new MongoClient(connection);
        await client.connect()
        console.log('connection successful');

        db = client.db('collge')
        return db;
        
    }
    catch(err){
        console.log(err);
        throw(err);
    }

}

module.exports = connectDb;
