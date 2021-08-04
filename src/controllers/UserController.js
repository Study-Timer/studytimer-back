
const jwt = require('jsonwebtoken');
const UserService = require('../services/UserService')
const AuthService = require('../services/AuthService')


module.exports = {

    async ping(req, res){
        return res.json({ping: 'pong'})
    },

    
    async indexOne(req, res) {
        try {
            const { user_id } = req.params;
            
            const user = await UserService.getUser(user_id)

            return res.status(200).json(user)
         
        } catch (error) {
            return res.status(500).json(`Internal Server Error: ${error}`)
        }

        

    }, 

    async store(req, res) {
        try {
            const {username, email, password} = req.body

            if(!username){
                return res.status(400).json(`Bad Request: username is required`)
            }

            if(!email){
                return res.status(400).json(`Bad Request: email is required`)
            }

            if(!password){
                return res.status(400).json(`Bad Request: password is required`)
            }

            const user = await UserService.createUser(username,email,password)

            return res.status(201).json(user)
            
        } catch (error) {
            return res.status(500).json(`Internal Server Error: ${error}`)
            
        }
        

    }, 

    async updateUser(req, res) {

    },

    async login(req, res) {
        try {
            const { email, password } = req.body

            if(!email){
                return res.status(400).json(`Bad Request: email is required`)
            }

            if(!password){
                return res.status(400).json(`Bad Request: password is required`)
            }

            const user = await UserService.findByEmail(email)

            if(!user){
                return res.status(400).json(`Bad Request: user not exists`)
            }

            const matchPassword = AuthService.matchPassword(password, user.password)

            if(!matchPassword){
                return res.status(400).json(`Bad Request: Password Incorrect`)
            }

            const token = AuthService.generateTokenJwt(user.id)

            res.header('auth-token', token).json({
                id: user.id,
                token
            })

        } catch (error) {
            return res.status(500).json(`Internal Server Error: ${error}`)
            
        }

    }
}