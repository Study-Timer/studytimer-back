const { Model, DataTypes } = require('sequelize')

class Subject extends Model {

    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            difficulty: DataTypes.ENUM('EASY', 'MEDIUM', 'HARD'),


        }, { sequelize: connection })

    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'})
    }
}

module.exports = Subject