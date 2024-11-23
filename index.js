const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
//const AppError = require('./AppError')
const port = 3000

//const Book = require('./models/book')

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/books')
.then(() => {
    console.log("MONGO CONNECTION OPEN!!")
})
.catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!")
    console.log(err)
})

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//const categories = Book.schema.path('category').enumValues

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`)
})