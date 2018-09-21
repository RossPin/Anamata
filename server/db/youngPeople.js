const mongoose = require('./conn')

var ypSchema = new mongoose.Schema({ details: Object, consent: Boolean, timestamp: Number, answers: Object, resolved: Boolean })
var YP = mongoose.model('yp', ypSchema)

function createYp (details, consent, timestamp, answers) {
  var ypData = new YP({ details, consent, timestamp, answers, resolved: false })
  return ypData.save()
}

function addResponse (id, response) {
  return YP.update({ _id: id }, { $push: { responses: response } })
}

function getYp (id) {
  return YP.find({ _id: id }).then(yps => yps[0])
}

function getCurrent () {
  return YP.find({ resolved: false })
}

module.exports = {
  createYp,
  addResponse,
  getYp,
  getCurrent
}
