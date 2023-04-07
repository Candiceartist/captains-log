const express = require('express')
const app = express()
const articleRouter = require('./routes/articles')

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)


app.get('/', (req, res) => {
    const articles = [{
        title:" test article ",
        createdAt: Date.now(),
        description: 'Test description'
    }]

    res.render('index', { text: 'Hello'})
})

app.listen(3000)