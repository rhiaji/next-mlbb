const { MongoClient } = require('mongodb')

let dbConnection // Global variable to store the database connection

module.exports = {
    connectToDb: async () => {
        // If the database connection already exists, return it
        if (dbConnection) {
            return dbConnection
        }

        try {
            // Establish a new database connection
            const client = await MongoClient.connect(
                'mongodb+srv://rhiaji:Saravia12345@cluster0.hmy2bxv.mongodb.net/mlbb?retryWrites=true&w=majority',
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                }
            )
            dbConnection = client.db()
            return dbConnection
        } catch (err) {
            console.error(err)
            throw err
        }
    },
}
