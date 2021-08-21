// Operações referentes a atividades

const UserService = require('../services/UserService')
const SubjectService = require('../services/SubjectService')
const ActivityService = require('../services/ActivityService')

module.exports = {

    async store(req, res) {
        try {
            
            const { subject_id } = req.params
            const { description, time} = req.body

            const subject = await SubjectService.getSubjects(subject_id)


            if(!subject) {
                return res.status(404).json(`Subject not exists`)
            }

            
            if(!description){
                return res.status(400).json(`Bad Request: description is required`)
            }

            if(!time){
                return res.status(400).json(`Bad Request: time is required`)
            } 

            const activity = await ActivityService.createActivity(subject_id,description,time)

            return res.status(201).json(activity)


        } catch (error) {
            return res.status(500).json(`Internal Server Error: ${error}`)
            
        }

    }

}