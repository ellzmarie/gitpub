const express = require('express')
const app = express()
const port = 3005

const drinks = require('./models/drinks')


app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

// index
app.get("/drinks", (req, res) => {
    // res.send(drinks)
    
    res.render('index.ejs', {
        allDrinks: drinks,
        title: 'index'
    })
})

app.get("/drinks/:id", (req, res) => {
    res.send(req.params.id)
})

//show
app.get('/drinks/:x', (req, res) => {
    res.render('show.ejs', {
        drinks: drinks[req.params.x],
        title: 'show'
    })
})






app.listen(port, () => {
    console.log(`listening on ${port}...`)
})
