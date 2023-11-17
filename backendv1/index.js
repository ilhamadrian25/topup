import express from 'express'
import dotenv from 'dotenv'
import db from './config/Database.js'
import router from './route/v1/index.js'
import cors from 'cors'

dotenv.config()
const app = express()


app.listen(process.env.PORT, (req, res) => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

try {
    await db.authenticate()
    console.log('Database has been authenticated');
} catch (error) {
    console.log('error: ' + error);
}

(async () => {
    await db.sync({ force: false });
    // Code here
  })();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  // Atau, jika ingin mengizinkan dari beberapa domain:
  // res.header('Access-Control-Allow-Origin', 'http://domain1.com, http://domain2.com');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
  app.use(express.json())
  app.use(router)
