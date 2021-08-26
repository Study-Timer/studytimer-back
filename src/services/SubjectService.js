const Subject = require('../database/models/Subject');

const createSubject = async (UserId, name, description, difficulty) => {
  const data = {
    UserId, name, description, difficulty,
  };

  const subject = await Subject.create(data);

  return subject;
};

const getSubjects = async (UserId) => {
  const subjects = await Subject.findAll({ where: { UserId } });

  return subjects;
};

const getByIndex = async (id) => {
  const subject = await Subject.findByPk(id);

  return subject;
};

const updateSubject = async (id, UserId, name, description) => {
  const subject = await Subject.update({ name, description }, { where: { id, UserId } });

  return subject;
};

const deleteSubject = async (id, UserId) => {
  const subject = await Subject.destroy({ where: { [Op.and]: [{ id }, { UserId }] } });

  return subject;
};

module.exports = {
  createSubject, getSubjects, updateSubject, deleteSubject, getByIndex,
};
