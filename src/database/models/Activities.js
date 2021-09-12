const { Model , DataTypes } = require('sequelize')


class Activities extends Model {

    
    static init(connection) {
        super.init({
            description: DataTypes.STRING,
            time: DataTypes.INTEGER,
        }, { sequelize: connection, freezeTableName: true,tableName: 'activities' }
        )
    }

    static associate(models) {
        this.belongsTo(models.Subject, { foreignKey: 'subject_id', as: 'subject'})
    }
}

module.exports = Activities