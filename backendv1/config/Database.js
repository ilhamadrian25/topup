import Sequelize from 'sequelize'

const db = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'id20314206_ilhamadrian',
    password: '@MuhamadIlham77',
    database: 'id20314206_ilhamadrian'
});

export default db;
