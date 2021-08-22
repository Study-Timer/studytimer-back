const Activity = require('../database/models/Activities')



const createActivity = async (subject_id, description, time) => {
    const data = {subject_id, description, time}

    const activity = await Activity.create(data)

    return activity

}

const getByIndex = async (id) => {
    const activity = await Activity.findByPk(id)

    return activity

}

const updateActivity = async (id, subject_id, description, time) => {

    const activity = await Activity.update({description, time}, {where: {id, subject_id}})

    return activity
}


module.exports = {createActivity, updateActivity, getByIndex}