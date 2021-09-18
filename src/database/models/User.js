const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(connection) {
    super.init({
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,

    }, { sequelize: connection });
  }

  static associate(models) {
    this.hasMany(models.Subject, { foreignKey: 'user_id', as: 'subjects' });
  }
}

module.exports = User;
