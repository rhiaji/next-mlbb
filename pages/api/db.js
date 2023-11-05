const { MongoClient } = require('mongodb')
import dotenv from 'dotenv'

let dbConnection

module.exports = {
    connectToDb: () => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(process.env.URI)
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
