
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliverableSchema = new Schema({
Underscoreid:String , 


dName:String , 


dEnd:String , 


dStatus:String 



})

module.exports = {
  Deliverable : mongoose.model('deliverable', deliverableSchema),
}

