const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors())

const api = require('./api/api')

app.use('/api', api)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server live on port ${port}`)
})