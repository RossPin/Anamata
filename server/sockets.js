
module.exports = http => {
  var io = require('socket.io')(http)

  io.on('connection', (socket) => {
    /* The first thing the controller does when a socket attaches
        is console log a new connection
    */
    console.log(`A user connected at ${new Date()}`)

    // Then it puts all the listeners on that socket.
    socket.on('disconnect', () => {
      console.log(`A user disconnected at ${new Date()}`)
    })

    socket.on('joinSession', (id, username) => {
      socket.join(id)
      console.log('you have joined room' + id)
    })

    socket.on('trigger-alert', (id, msg) => {
      console.log({ msg })
      io.to(id).emit('alert', msg)
    })
  })

  return io
}
