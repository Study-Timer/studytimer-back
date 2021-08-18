const Subject = require('../database/models/Subject')


const createSubject = async (user_id, name, description, difficulty) => {
    const data = {user_id, name, description, difficulty}

    const subject = await Subject.create(data)

    return subject

}

const getSubjects = async (user_id) => {

    const subjects = await Subject.findAll(user_id)

    return subjects

}


module.exports = {createSubject, getSubjects}