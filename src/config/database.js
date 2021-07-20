const { DB_USERNAME, DB_PASSWORD, DB_NAME } =  process.env

module.exports = { 
    dialect: 'postgres',
    host: 'localhost',
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    define: {
        timestamps: true,
        underscored: true

    }
}