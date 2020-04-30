'use strict'
module.exports = function (app) {
    var contactList = require('../controllers/contactListController')
    var userList = require('../controllers/userListController')

    app.route('/users')
        .get(userList.listAllUser)

    app.route('/contacts/getMany')
        .get(contactList.listAllContact)

    app.route('/contacts/add')
        .post(contactList.createAContact)

    app.route('/contacts/:contactId')
        .get(contactList.readAContact)
        
    app.route('/contacts/update/:contactId')
        .put(contactList.updateAContact) 
        
    app.route('/contacts/delete/:contactId')
        .delete(contactList.deleteAContact)
}