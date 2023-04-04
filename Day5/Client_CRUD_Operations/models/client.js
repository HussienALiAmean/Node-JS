const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ClientSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  firstName:{
    type: String
  },
  lastName:{
    type: String
  },
  phone: {
    type: Number,
    length:11
  },
  username: {
    type: String,
    unique:true
  }
})
//creteCollection
const Client = mongoose.model('Clients', ClientSchema);
module.exports = Client;

