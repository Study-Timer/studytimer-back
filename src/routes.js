const express = require('express')

const UserController = require('./controllers/UserController')

const routes = express.Router()


routes.get('/', UserController.ping)

routes.post('/login', UserController.login)
routes.post('/users', UserController.store)
routes.post('/users/:user_id', UserController.verifyJWT, UserController.updateUser)
routes.get('/users/:user_id', UserController.verifyJWT ,UserController.indexOne)



module.exports = routes