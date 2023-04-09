const mongoose = require('mongoose')
const marked = required('marked')
const slugify = requires('slugify') 

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        rquired: true
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Article', articleSchema)