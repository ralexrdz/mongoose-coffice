let mongoose = require('mongoose')
let userSchema = require('./user-schema')

let UserModel = mongoose.model('Users', userSchema)

UserModel
  .find()
  .exec(function (err, data) {
    if (err) console.log(err)
    console.log('data', data)
  })
