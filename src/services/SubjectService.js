const Subject = require('../database/models/Subject')


const createSubject = async (user_id, name, description, difficulty) => {
    const data = {user_id, name, description, difficulty}

    const subject = await Subject.create(data)

    return subject

}

const getSubjects = async (user_id) => {

    const subjects = await Subject.findAll({where: {user_id}})
    

    return subjects

}

const getByIndex = async (id) => {

    const subject = await Subject.findByPk(id)

    return subject

}


const updateSubject = async (id, user_id, name, description) => {

    const subject = await Subject.update({name, description}, {where: {id, user_id}})

    return subject
}

const deleteSubject = async (id, user_id) => {

    const subject = await Subject.destroy({where: {    [Op.and]: [{id}, {user_id}] }})

    return subject
}




module.exports = {createSubject, getSubjects, updateSubject, deleteSubject, getByIndex}