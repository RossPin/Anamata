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

server.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

server.get('/current', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

server.get('/reviewed', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

server.get('/viewanswers', (req, res) => {
  res.redirect('/current')
})

server.get('/*', (req, res) => {
  res.redirect('/')
})

module.exports = server
