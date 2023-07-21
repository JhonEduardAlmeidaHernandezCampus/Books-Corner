import dotenv from 'dotenv';
import express from 'express';
import mysql from 'mysql2';
import storageAdministrator from './routers/administrator.js'

dotenv.config();
let appExpress = express();
appExpress.use(express.json());

appExpress.use("/administrator", storageAdministrator);

let config = JSON.parse(process.env.MY_CONFIG)
appExpress.listen(config, () => console.log(`http://${config.hostname}:${config.port}`))