const express = require('express')
const drinks = require('./models/drinks')

const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})



app.get("/drinks", (req, res) => {
    res.send(drinks)
})












app.listen(1000, (req, res) => {
    console.log("listening...")
})
