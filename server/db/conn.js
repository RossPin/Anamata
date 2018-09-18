var mongoose = require('mongoose')
const conn = process.env.MONGODB_URI || 'mongodb://localhost:27017/survey'
mongoose.connect(conn, { useNewUrlParser: true })

module.exports = mongoose
