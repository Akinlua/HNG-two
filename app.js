require('dotenv').config()
require('express-async-errors');

const express = require('express')
const app = express()
const connectDB = require('./connect')
const Person = require('./model')
const errorHandlerMiddleware = require('./error-handler')
const notFound = require('./not-found')

const rateLimiter = require('express-rate-limit')

app.use(express.json()) 

// extra packages
app.set('trust proxy', 1);
app.use(rateLimiter({
  windowMs: 15 * 60 * 1000, //15minutes
  max: 100 //limit each IP to 100 requests per windows

}))

//API'S

//retrieve all persons
app.get('/api', async (req, res) => {

    const persons = await Person.find({})
    res.status(200).json({persons})

} )

//retrieve one persons by id
app.get('/api/:id', async (req, res) => {

    const person = await Person.findById(req.params.id)
    if (!person) {
        return res.status(404).json({error: "Person Not Found"})
    }
    res.status(200).json({person})
} )

//create person
app.post('/api', async (req, res) => {

    const {name} = req.body

    const person = await Person.create({name: name})

    res.status(201).json({person})
})

//edit person
app.patch('/api/:id', async (req, res) => {

    const person = await Person.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
    if (!person) {
        return res.status(404).json({error: "Person Not Found"})
    }

    res.status(200).json({person})
})

//delete person
app.delete('/api/:id', async (req,res) => {

    const person = await Person.findOneAndDelete({_id:req.params.id});
    if (!person) {
        return res.status(404).json({error: "Person Not Found"})
    }
    res.status(200).json({message: `Person '${person.name}' has been deleted`})
})

app.use(errorHandlerMiddleware);

app.use(notFound);




const port = process.env.PORT || 3000 

const start = async () => {
    try {
        await connectDB()
        app.listen(port, console.log(`Server is listening on port ${port}...`))

    } catch (error) {
        console.log(error)
    }
}

start()