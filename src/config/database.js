// const { DB_USERNAME, DB_PASSWORD, DB_NAME } =  process.env

// module.exports = {
//   dialect: 'postgres',
//   host: 'localhost',
//   username: 'studytimer',
//   password: 'studytimer',
//   database: 'studytimer-db',
//   define: {
//     timestamps: true,
//     underscored: true,

//   },
// };
const {
  DB_PASS, DB_USER, DB, DB_HOST, DATABASE_URL,
} = process.env;

module.exports = {
  development: {
    use_env_variable: DATABASE_URL,
    dialect: 'postgres',
    host: DB_HOST,
    username: DB_USER,
    password: `${DB_PASS}`,
    database: DB,
    define: {
      timestamps: true,
      underscored: true,

    },
  },
};
