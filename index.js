

let UserModel = mongoose.model('User', userSchema)

// userModel.create({
//   name: 'Armando',
//   lastname: 'Duran',
//   tags: ['flutter', 'dart', 'jenkins'],
//   address: {
//     street: 'Insurgentes',
//     number: 25,
//     CP: 12312
//   }
// }, function (err, data) {
//   if (err) console.log(err)
//   console.log('data', data)
// })

// let pancho = new UserModel()
// pancho.name = 'Pancho'
// pancho.lastname = 'Pistolas'

// pancho.save(function (err, data) {
//   if (err) console.log(err)
//   console.log('data', data)
// })

UserModel
  .find()
  // .where({ name: 'Ralex' })
  .exec(function (err, data) {
    if (err) console.log(err)
    // let user1 = data[0]
    // console.log(user1)
    // user1.name = 'CAmbieee'
    // user1.save(function (err2, data2) {
    //   if (err2) console.log(err2)
    //   console.log(data2)
    // })
    console.log('data', data)
  })

// mongoose.connection.close()
