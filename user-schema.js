var mongoose = require('mongoose')
// Para conectarnos a la base de datos "mi-base-de-datos"
mongoose.connect('mongodb://localhost/cofficedb')

var Schema = mongoose.Schema

var addressSchema = new Schema({
  address: {
    street: {
      type: String,
      require: true
    },
    number: Number,
    CP: Number
  }
})

var userSchema = new Schema({
  name: String,
  lastname: {
    type: String,
    unique: true
  },
  tags: [ String ],
  address: addressSchema
})

module.exports = userSchema
