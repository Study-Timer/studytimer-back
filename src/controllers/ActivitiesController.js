// Operações referentes a atividades

const SubjectService = require('../services/SubjectService');
const ActivityService = require('../services/ActivityService');

module.exports = {

  async store(req, res) {
    try {
      const { user_id } = req.params;
      const { subject_id } = req.params;
      const { description, time } = req.body;

      const subjectsOfUser = await SubjectService.getSubjects(user_id)
      const subject = await SubjectService.getByIndex(subject_id)


      if (!subject) {
        return res.status(404).json('Subject not exists');
      }

      if (!description) {
        return res.status(400).json('Bad Request: description is required');
      }

      if (!time) {
        return res.status(400).json('Bad Request: time is required');
      }

      const activity = await ActivityService.createActivity(subject_id, description, time);

      return res.status(201).json(activity);
    } catch (error) {
      return res.status(500).json(`Internal Server Error: ${error}`);
    }
  },

  async updateActivity(req, res) {
    try {
      const { subject_id, id } = req.params;
      const { description, time } = req.body;

      const subject = await SubjectService.getByIndex(subject_id);

      const activity = await ActivityService.getByIndex(id);

      if (!activity) {
        return res.status(404).json('Activity not exists');
      }

      if (!subject) {
        return res.status(404).json('Subject not exists');
      }

      if (!description) {
        return res.status(400).json('Bad Request: description is required');
      }

      if (!time) {
        return res.status(400).json('Bad Request: time is required');
      }

      const updatedActivity = await ActivityService.updateActivity(id, subject_id, description, time);

      return res.status(200).json(updatedActivity);
    } catch (error) {
      return res.status(500).json(`Internal Server Error: ${error}`);
    }
  },

};
