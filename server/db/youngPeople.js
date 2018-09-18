const mongoose = require('./conn')

var ypSchema = new mongoose.Schema({firstName: String, lastName: String, school: String, responses: Array, resolved: Boolean})
var YP = mongoose.model('yp', ypSchema)

function createYp(firstName, lastName, school) {
      var ypData = new YP({firstName, lastName, school, responses: [], resolved: false})  
      return ypData.save() 
}

function addResponse(id, response) {
    return YP.update({_id: id}, {$push: {responses: response}})
}

function getYp(id){
    return YP.find({_id: id}).then(yps => yps[0])
}

function getCurrent(){
    return YP.find({resolved: false})
}

module.exports = {
    createYp,
    addResponse,
    getYp,
    getCurrent
}