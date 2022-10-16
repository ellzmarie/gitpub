const express = require('express')
const app = express()
const port = 3005

const drinks = require('./models/drinks')


app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req, res) => {
    // res.send(drinks)
    
    res.render('index.ejs', {
        allDrinks: drinks,
        title: 'index'
    })
})








app.listen(port, (req, res) => {
    console.log(`listening on ${port}...`)
})
