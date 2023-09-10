require('dotenv').config()
require('express-async-errors');

const express = require('express')
const app = express()
const connectDB = require('./connect')
const Person = require('./model')
const errorHandlerMiddleware = require('./error-handler')
app.use(express.json()) 

//API'S

//handle retrieve by name or add

//retrieve all persons
app.get('/api', async (req, res) => {

    const persons = await Person.find({})
    res.status(200).json({persons})
} )

//create person
app.post('/api', async (req, res) => {

    const {name} = req.body

    const person = await Person.create({name: name})

    res.status(200).json({person})
})

//edit person
app.patch('/api/:id', async (req, res) => {

    const person = await Person.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
    if (!person) {
        return res.status(404).json({message: "Person Not Found"})
    }

    res.status(200).json({person})
})

//delete person
app.delete('/api/:id', async (req,res) => {

    const person = await Person.findOneAndDelete({_id:req.params.id});
    if (!person) {
        return res.status(404).json({message: "Person Not Found"})
    }
    res.status(200).json({message: `Person '${person.name}' has been deleted`})
})

app.use(errorHandlerMiddleware);






















const port = 3000 || process.env.PORT

const start = async () => {
    try {
        await connectDB()
        app.listen(port, console.log(`Server is listening on port ${port}...`))

    } catch (error) {
        console.log(error)
    }
}

start()