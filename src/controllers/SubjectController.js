const UserService = require('../services/UserService');
const SubjectService = require('../services/SubjectService');

module.exports = {

  async store(req, res) {
    try {
      // Nome, Descrição, DIFICULDADE ( que é um ENUM("EASY", "MEDIUM", "HARD") )

      const { UserId } = req.params;
      const { name, description, difficulty } = req.body;

      const user = await UserService.getUser(UserId);

      if (!user) {
        return res.status(404).json('User not exists');
      }

      if (!name) {
        return res.status(400).json('Bad Request: name is required');
      }

      if (!description) {
        return res.status(400).json('Bad Request: description is required');
      }

      if (!difficulty) {
        return res.status(400).json('Bad Request: password is required');
      }

      const subject = await SubjectService.createSubject(UserId, name, description, difficulty);

      return res.status(201).json(subject);
    } catch (error) {
      return res.status(500).json(`Internal Server Error: ${error}`);
    }
  },

  async getAll(req, res) {
    try {
      const { UserId } = req.params;

      const user = await UserService.getUser(UserId);

      if (!user) {
        return res.status(404).json('User not exists');
      }

      const subjects = await SubjectService.getSubjects(UserId);

      return res.status(200).json(subjects);
    } catch (error) {
      return res.status(500).json(`Internal Server Error: ${error}`);
    }
  },

  async updateSubject(req, res) {
    try {
      const { UserId, id } = req.params;
      const { name, description } = req.body;

      const user = await UserService.getUser(UserId);

      if (!user) {
        return res.status(404).json('User not exists');
      }

      if (!name) {
        return res.status(400).json('Bad Request: name is required');
      }

      if (!description) {
        return res.status(400).json('Bad Request: description is required');
      }

      const updatedSubject = await SubjectService.updateSubject(id, UserId, name, description);

      return res.status(200).json(updatedSubject);
    } catch (error) {
      return res.status(500).json(`Internal Server Error: ${error}`);
    }
  },

  async deleteSubject(req, res) {
    try {
      const { UserId, id } = req.params;

      const deletedSubject = await SubjectService.deleteSubject(id, UserId);

      return res.status(200).json(deletedSubject);
    } catch (error) {
      return res.status(500).json(`Internal Server Error: ${error}`);
    }
  },

};
