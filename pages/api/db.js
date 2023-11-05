const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
    connectToDb: () => {
        return new Promise((resolve, reject) => {
            MongoClient.connect('mongodb://127.0.0.1:27017/mlbb')
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
