'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ContactSchema = new Schema({
    contactid: {
        type: String,
        Required: 'Please enter'
    },
    firstName: {
        type: String,
        Required: 'Please enter'
    },
    lastName: {
        type: String,
        Required: 'Please enter'
    },
    middleName: {
        type: String,
        Required: 'Please enter'
    },
    //missed left last_name
    gender: {
        type: String,
        Required: 'Please enter'
    },
    mobilenum: {
        type: String,
        Required: 'Please enter'
    },
    email: {
        type: String,
        Required: 'Please enter'
    },
    facebook: {
        type: String,
        Required: 'Please enter'
    },
    imgurl: {
        type: String,
        Required: 'Please enter'
    }
})


module.exports = mongoose.model('Contacts', ContactSchema,'Contacts')
