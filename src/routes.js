const express = require('express')

const UserController = require('./controllers/UserController')

const routes = express.Router()


routes.get('/', UserController.ping)

routes.post('/users', UserController.store)



module.exports = routes