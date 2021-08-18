const Subject = require('../database/models/Subject')
const { updateUser } = require('./UserService')


const createSubject = async (user_id, name, description, difficulty) => {
    const data = {user_id, name, description, difficulty}

    const subject = await Subject.create(data)

    return subject

}

const getSubjects = async (user_id) => {

    const subjects = await Subject.findAll({where: {user_id}})
    

    return subjects

}


const updateSubject = async (user_id, name, description) => {
    
    const data = {name, description}

    const updatedSubject = await Subject.update(data, {where:{user_id}})

    return updatedSubject


}




module.exports = {createSubject, getSubjects}