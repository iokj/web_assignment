var express = require('express')
var cors = require('cors')
app = express()
app.use(cors())
port = process.env.PORT || 3000
mongoose = require('mongoose')
Contact = require('./api/models/contactListModel')
User = require('./api/models/userListModel')
bodyParser = require('body-parser')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/ContactList', function(error){
    if(error) throw error
    console.log('Successfully connected');
})

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var routes = require('./api/routes/contactListRoutes')
routes(app)

app.listen(port)

console.log('Contact List started on : '+ port)