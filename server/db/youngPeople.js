const mongoose = require('./conn')

var ypSchema = new mongoose.Schema({ details: Object, consent: Boolean, timestamp: Number, alerts: Object, answers: Object, resolved: Boolean })
var YP = mongoose.model('yp', ypSchema)

function createYp (details, consent, timestamp, answers, alerts) {
  var ypData = new YP({ details, consent, timestamp, answers, alerts, resolved: false })
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

function removeYp (id) {
  return YP.remove({ _id: id })
}

module.exports = {
  createYp,
  addResponse,
  getYp,
  getCurrent,
  removeYp
}
