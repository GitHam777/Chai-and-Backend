require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', function(req, res) {
    res.send('HamsenDoesTweet')
})

app.get('/login', function(req, res) {
    res.send('<h1>please login at gmail</h1>')
})

app.get('/chai', (req, res) => {
    res.send('<h4>chai peelo re</h4>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})