// const { DB_USERNAME, DB_PASSWORD, DB_NAME } =  process.env

module.exports = { 
    dialect: 'postgres',
    host: 'localhost',
    username: 'studytimer',
    password: 'studytimer',
    database: 'studytimer-db',
    define: {
        timestamps: true,
        underscored: true

    }
}