
const UserService = require('../services/UserService')


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

    }
}