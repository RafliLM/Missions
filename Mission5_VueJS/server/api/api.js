const express = require('express')
const connectDB = require('./db')
const mongo = require('mongodb')

const router = express.Router()

// Get all personal info
router.get('/', async (req, res) => {
    const PersonalData = await connectDB()
    res.status(200).send(await PersonalData.find({}).toArray())
})

// Get specified perfonal info
router.get('/:id', async (req, res) => {
    const PersonalData = await connectDB()
    let objectId = new mongo.ObjectId(req.params.id)
    res.status(200).send(await PersonalData.find({_id : objectId}).toArray())
})

// Create personal info
router.post('/', async (req, res) => {
    const PersonalData = await connectDB()
    await PersonalData.insertOne({
        name : req.body.name,
        nim : req.body.nim,
        email : req.body.email
    })
    res.status(201).send({
        message : "Personal Data Created!" 
    })
})

// Edit personal info
router.put('/:id', async (req, res) => {
    const PersonalData = await connectDB()
    let objectId = new mongo.ObjectId(req.params.id)
    await PersonalData.updateOne({
        _id : objectId
    }, {
        $set : {
            name : req.body.name,
            nim : req.body.nim,
            email : req.body.email
        }
    })
    res.status(204).send({
        message : "Personal Data Updated!"
    })
})

// Delete personal info
router.delete('/:id', async (req, res) => {
    const PersonalData = await connectDB()
    let objectId = new mongo.ObjectId(req.params.id)
    await PersonalData.deleteMany({
        _id: objectId
    })
    res.status(200).send({
        message : "Personal Data Deleted!"
    })
})

module.exports = router