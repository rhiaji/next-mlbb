const { MongoClient } = require('mongodb')
import dotenv from 'dotenv'

let dbConnection

module.exports = {
    connectToDb: () => {
        return new Promise((resolve, reject) => {
            MongoClient.connect('mongodb+srv://rhiaji:Saravia12345@cluster0.hmy2bxv.mongodb.net/mlbb?retryWrites=true&w=majority')
                .then((client) => {
                    dbConnection = client.db()
                    resolve()
                })
                .catch((err) => {
                    console.log(err)
                    reject(err)
                })
        })
    },
    getDb: () => dbConnection,
}
