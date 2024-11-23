const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title cannot be blank']
    },
    author: {
        type: String,
        required: [true, 'Author cannot be blank']
    },
    image: {
        type: String,
        lowercase: true,
        required: [true, 'Image cannot be blank']
    },
    description: {
        type: String,
        required: [true, 'Description cannot be blank']
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['mission', 'marketing', 'management', 'product', 'sales'],
        required: [true, 'Category cannot be blank']
    }
})

// Compile model
const Book = mongoose.model('Book', bookSchema)

module.exports = Book