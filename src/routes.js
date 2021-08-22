const express = require('express')

const UserController = require('./controllers/UserController')
const SubjectController = require('./controllers/SubjectController')
const ActivitiesController = require('./controllers/ActivitiesController')

const routes = express.Router()


routes.get('/', UserController.ping)

routes.post('/login', UserController.login)
routes.post('/users', UserController.store)
routes.post('/users/:user_id', UserController.verifyJWT, UserController.updateUser)
routes.get('/users/:user_id', UserController.verifyJWT ,UserController.indexOne)

routes.post('/:user_id/subject', UserController.verifyJWT, SubjectController.store)
routes.get('/:user_id/subjects', UserController.verifyJWT, SubjectController.getAll)
routes.put('/:user_id/subject/:id', UserController.verifyJWT, SubjectController.updateSubject)
routes.delete('/:user_id/subject/:id', UserController.verifyJWT, SubjectController.deleteSubject)


routes.post('/:user_id/:subject_id/activities', UserController.verifyJWT,ActivitiesController.store)
routes.put('/:user_id/:subject_id/activities/:id', /*UserController.verifyJWT,*/ActivitiesController.updateActivity)

module.exports = routes