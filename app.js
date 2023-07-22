import dotenv from 'dotenv';
import express from 'express';


import storageAdministrator from './routers/administrator.js'
import storageClients from './routers/client.js';
import storageStatus_Loan from './routers/status_loan.js';
import storageLoan from './routers/loan.js';
import storageCategoriesBooks from './routers/categorie_book.js';
import storageBookDescription from './routers/book_description.js';


dotenv.config();
let appExpress = express();
appExpress.use(express.json());

appExpress.use("/administrator", storageAdministrator);
appExpress.use("/clients", storageClients);
appExpress.use("/status_loan", storageStatus_Loan);
appExpress.use("/loan", storageLoan);
appExpress.use("/categorie_book", storageCategoriesBooks);
appExpress.use("/book_description", storageBookDescription);


let config = JSON.parse(process.env.MY_CONFIG)
appExpress.listen(config, () => console.log(`http://${config.hostname}:${config.port}`))