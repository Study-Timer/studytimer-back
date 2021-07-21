const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../database/models/User')
const Subject = require('./models/Subject')
const Activities = require('./models/Activities')

const connection = new Sequelize(dbConfig)

User.init(connection)
Subject.init(connection)
Activities.init(connection)


User.associate(connection.models)
Subject.associate(connection.models)
Activities.associate(connection.models)

module.exports = connection