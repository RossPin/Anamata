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

module.exports = server