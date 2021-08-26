const Activity = require('../database/models/Activities');

const createActivity = async (SubjectId, description, time) => {
  const data = { SubjectId, description, time };

  const activity = await Activity.create(data);

  return activity;
};

const getByIndex = async (id) => {
  const activity = await Activity.findByPk(id);

  return activity;
};

const updateActivity = async (id, SubjectId, description, time) => {
  const activity = await Activity.update({ description, time }, { where: { id, SubjectId } });

  return activity;
};

module.exports = { createActivity, updateActivity, getByIndex };
