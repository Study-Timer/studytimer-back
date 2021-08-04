const User = require('../database/models/User')
const bcrypt = require('bcrypt');
const AuthService = require('../services/AuthService')

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

const updateUser = async (data, id) => {

    const user = await User.findByPk(id)

    if (!user) throw new Error('Usuário com id ${user_id} não existe')
    
    const {
        newPassword,
        password
    } = data

    if (!AuthService.matchPassword(password, user.password)) {
        throw new Error('Senha inválida')
    }

    const encryptedPassword = await bcrypt.hash(newPassword, 10)

    user.password = encryptedPassword

    user.save()

    return 'Senha atualizada com sucesso'

} 

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


