const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const users = require('./routes/users')
const yp = require('./routes/youngPeople')
const path = require('path')

server.use(bodyParser.json())
server.use('/api/users', users)
server.use('/api/yp', yp)
server.use(express.static(path.join(__dirname, '../public')))

server.get('/*', (req, res) => {
  res.redirect('/')
})

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
