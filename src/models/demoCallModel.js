const mongoose = require('mongoose')

const demoCallSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter the Name'],
    },

    contact: {
        type: Number,
        required: [true, 'Please Enter the Your Phone Number'],
    },
    email: {
        type: String,
        required:  [true, 'Please Enter the Email']
    },


})

module.exports = mongoose.model('DemoCall', demoCallSchema);