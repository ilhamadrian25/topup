import express from 'express';
import dotenv from 'dotenv';
import db from './config/Database.js';
import router from './route/v1/index.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

(async () => {
    try {
        await db.authenticate();
        console.log('Database has been authenticated');
        await db.sync({ force: false });
        // Code here
    } catch (error) {
        console.error('Error: ' + error);
    }
})();

app.use(cors());
app.use(express.json());
app.use(router);
