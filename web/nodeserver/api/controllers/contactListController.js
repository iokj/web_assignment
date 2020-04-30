'use strict'
var mongoose = require('mongoose')
Contact = mongoose.model('Contacts')

exports.listAllContact = function(req, res){
    var query = { sort: { firstName: 1 } }
    Contact.find({}, null, query, function(err, contact){
        if(err) throw err
        //console.log(user)
        res.json(contact)
    })
}

exports.createAContact = function(req, res){
    var newContact = new Contact(req.body)
    newContact.save(function(err, contact){
        if(err) throw err
        res.json(contact)
    })
}

exports.readAContact = function(req, res){
    //console.log(req.params.userId)
    Contact.findById(req.params.contactId, function(err, contact){
        if(err) throw err
        res.json(contact)
    })
}

// exports.readAContact = function(req, res){
//     console.log(res.params)
//     Contact.findOne({ firstName: req.params }, function(err, contact){
//         if(err) throw err
//         res.json(contact)
//     })
// }

exports.deleteAContact = function(req, res){
    //console.log(req.params.userId)
    Contact.findByIdAndRemove(req.params.contactId, function(err, contact){
        if(err) throw err
        const response = {
            message: "Delete contact id: "+ req.params.contactId +" successfully",
            id: contact.contactid
        }
        res.json(response)
    })
}

exports.updateAContact = function(req, res){
    console.log(req.params.contactId)
    var newContact = {}
    newContact = req.body
    console.log(newContact)
    Contact.findByIdAndUpdate(req.params.contactId, newContact, {new: true}, function(err, contact){
        if(err) throw err
        console.log(contact)
        res.json(contact)
    })
}