// Operações referentes a atividades

const SubjectService = require('../services/SubjectService');
const ActivityService = require('../services/ActivityService');

module.exports = {

  async store(req, res) {
    try {
      const { SubjectId } = req.params;
      const { description, time } = req.body;

      const subject = await SubjectService.getSubjects(SubjectId);

      if (!subject) {
        return res.status(404).json('Subject not exists');
      }

      if (!description) {
        return res.status(400).json('Bad Request: description is required');
      }

      if (!time) {
        return res.status(400).json('Bad Request: time is required');
      }

      const activity = await ActivityService.createActivity(SubjectId, description, time);

      return res.status(201).json(activity);
    } catch (error) {
      return res.status(500).json(`Internal Server Error: ${error}`);
    }
  },

  async updateActivity(req, res) {
    try {
      const { SubjectId, id } = req.params;
      const { description, time } = req.body;

      const subject = await SubjectService.getByIndex(SubjectId);

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

      const updatedActivity = await ActivityService.updateActivity(id, SubjectId, description, time);

      return res.status(200).json(updatedActivity);
    } catch (error) {
      return res.status(500).json(`Internal Server Error: ${error}`);
    }
  },

};
