import Sequelize from 'sequelize'

const db = new Sequelize({
    dialect: 'mysql',
    host: 'sql312.infinityfree.com',
    port: 3306,
    username: 'if0_35386776',
    password: '1VaI119uvwEq',
    database: 'if0_35386776_test'
});

export default db;
