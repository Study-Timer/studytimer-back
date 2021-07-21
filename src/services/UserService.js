const User = require('../database/models/User')
const bcrypt = require('bcrypt');



const getUser = async (id) => {}

const createUser = async (username, email, password) => {
    const data = {username, email}

    const password_hash = await bcrypt.hash(password,10)

    data.password = password_hash

    const createdUser = await User.create(data)

    return createdUser

}

const updateUser = async (data) => {} 



module.exports = {
    getUser,
    createUser, 
    updateUser
}