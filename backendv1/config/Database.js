import Sequelize from 'sequelize'

const db = new Sequelize({
    dialect: 'mysql',
    host: 'db4free.net',
    port: 3306,
    username: 'epiz_32618037_te',
    password: 'epiz_32618037_te',
    database: 'epiz_32618037_te'
});

export default db;
