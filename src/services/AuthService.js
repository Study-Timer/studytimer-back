const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const generateTokenJwt = (userId) => {
    return jwt.sign({ _id: userId }, `${process.env.SECRET_KEY}`, { expiresIn: '1d'})
}


const matchPassword = async (password, userPassword) => {
    return bcrypt.compareSync(password, userPassword)
}




module.exports = {
    generateTokenJwt,
    matchPassword
    
}