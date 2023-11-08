import Sequelize from 'sequelize'

const db = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'topup'
});

export default db;