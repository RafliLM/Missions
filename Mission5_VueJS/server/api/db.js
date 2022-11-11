const { MongoClient } = require("mongodb")

const connectionString = process.env.MONGO_URI

const connectDB = async () => {
    const client = await MongoClient.connect(connectionString, {
        useNewUrlParser: true
    })

    return client.db('Mission5').collection('PersonalData')
}

module.exports = connectDB