const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Article = require('./models/article')
const articleRouter = require('./routes/articles')

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));
mongoose.set("strictQuery", true);
mongoose.connect('mongodb+srv://candiceartist:Livewire286@cluster0.pxtgk1p.mongodb.net/?retryWrites=true&w=majority')



app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))



app.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('articles/index', { articles: articles })
  })

app.use('/articles', articleRouter)
app.listen(3000)