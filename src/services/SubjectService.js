const Subject = require('../database/models/Subject')


const createSubject = async (user_id, name, description, difficulty) => {
    const data = {user_id, name, description, difficulty}

    const subject = await Subject.create(data)

    return subject

}


module.exports = {createSubject}