const express = require('express')
const app = express()
const port = 3005
app.use(express.static('public'))

const drinks = require('./models/drinks')
const food = require('./models/food')


app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

// drinks index
app.get("/drinks", (req, res) => {
    // res.send(drinks)
    
    res.render('index.ejs', {
        allDrinks: drinks,
        title: 'index'
    })
})

app.get("/drinks/:id", (req, res) => {
    res.render('show.ejs', {
        drinks:drinks[req.params.id]
    })
})

// foods index

app.get("/food", (req, res) => {    
    res.render('food_index.ejs', {
        allFood: food,
        title: 'index'
    })
})

app.get("/food/:id", (req, res) => {
    res.render('food_show.ejs', {
        food: food[req.params.id]
    })
})

// drinks show
app.get('/drinks/:id', (req, res) => {
    res.render('show.ejs', {
        drinks: drinks[req.params.id],
        title: 'show'
    })
})

// foods show
app.get('/food/:id', (req, res) => {
    res.render('food_show.ejs', {
        food: food[req.params.id],
        title: 'show'
    })
})

// port
app.listen(port, () => {
    console.log(`listening on ${port}...`)
})
