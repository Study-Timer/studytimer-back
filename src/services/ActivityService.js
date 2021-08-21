const Activity = require('../database/models/Activities')



const createActivity = async (subject_id, description, time) => {
    const data = {subject_id, description, time}

    const activity = await Activity.create(data)

    return activity

}


module.exports = {createActivity}