require('dotenv').config()

const server = require('./server')

const PORT = process.env.PORT || 3000

const http = server.listen(PORT, () => {
  console.log('Listening on port', PORT)
})

const socket = require('./sockets')(http)
server.set('socket', socket)

if (process.env.ENVIRONMENT !== 'production') socket.listen(8000)
