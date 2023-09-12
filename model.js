const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [200, 'name can not be more than 200 characters']
    }
})

module.exports = mongoose.model('Person', PersonSchema)