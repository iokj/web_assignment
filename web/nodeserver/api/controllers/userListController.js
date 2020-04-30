'use strict'
var mongoose = require('mongoose')
User = mongoose.model('Users')

exports.listAllUser = function(req, res){
    var query = { sort: { username: 1 } }
    User.find({}, null, query, function(err, user){
        if(err) throw err
        //console.log(user)
        res.json(user)
    })
}