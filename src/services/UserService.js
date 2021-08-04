const User = require('../database/models/User')
const bcrypt = require('bcrypt');



const getUser = async (id) => {
    const userById = await User.findByPk(id)
    
    return userById
}

const createUser = async (username, email, password) => {
    const data = {username, email}

    const password_hash = await bcrypt.hash(password,10)

    data.password = password_hash

    const createdUser = await User.create(data)

    delete createdUser.dataValues.password


    return createdUser

}

const updateUser = async (data) => {} 

const findByEmail = async (email) => {
    const user = await User.findOne({ email })

    return user
}



module.exports = {
    getUser,
    createUser, 
    updateUser,
    findByEmail
}


