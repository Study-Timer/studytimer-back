/* eslint-disable no-console */
const Activities = require('../database/models/Activities');

const createActivity = async (subject_id, description, time) => {
  const data = { subject_id, description, time };
  console.log('dados>', data);
  const activity = await Activities.create(data);

  return activity;
};

const getByIndex = async (id) => {
  const activity = await Activities.findByPk(id);

  return activity;
};

const updateActivity = async (id, subject_id, description, time) => {
  const activity = await Activities.update({ description, time }, { where: { id, subject_id } });

  return activity;
};

module.exports = { createActivity, updateActivity, getByIndex };
