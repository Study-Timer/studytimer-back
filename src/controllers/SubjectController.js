const UserService = require('../services/UserService')
const SubjectService = require('../services/SubjectService')


module.exports  = {

    async store(req, res) {
        try {

            //Nome, Descrição, DIFICULDADE ( que é um ENUM("EASY", "MEDIUM", "HARD") )
            

            const { user_id } = req.params
            const { name, description, difficulty} = req.body

            const user = await UserService.getUser(user_id)


            if(!user) {
                return res.status(404).json(`User not exists`)
            }

            if(!name){
                return res.status(400).json(`Bad Request: name is required`)
            }

            if(!description){
                return res.status(400).json(`Bad Request: description is required`)
            }

            if(!difficulty){
                return res.status(400).json(`Bad Request: password is required`)
            } 

            const subject = await SubjectService.createSubject(user_id, name, description, difficulty)

            return res.status(201).json(subject)


        } catch (error) {
            return res.status(500).json(`Internal Server Error: ${error}`)
            
        }

    },

    async getAll(req, res) {
        try {
        
            const { user_id } = req.params

            const user = await UserService.getUser(user_id)

            if(!user) {
                return res.status(404).json(`User not exists`)
            }

            const subjects = await SubjectService.getSubjects(user_id)

            return res.status(200).json(subjects)

            
        } catch (error) {
            return res.status(500).json(`Internal Server Error: ${error}`)
        }

    }


}