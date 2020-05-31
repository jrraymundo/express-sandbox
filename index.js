const express = require('express')
const axios = require('axios')

const app = express() 
const port = 3000
const baseUrl ='https://ghibliapi.herokuapp.com'

// Get all Ghibili films
app.get('/', (req, res) => (
    axios.get(`${baseUrl}/films`)
    .then(({data}) => res.send(data))
    .catch(err => console.log(err))
))

// Get Ghibli film by id
app.get('/films/:id', (req, res) => (
    axios.get(`${baseUrl}/${req.params.id}`)
    .then(({data}) => res.send(data))
    .catch(err => console.log(err))
))

app.listen(port, () => console.log("App is now running"))