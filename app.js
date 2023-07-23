import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
let appExpress = express();
appExpress.use(express.json());

// Tablas con GET, POST, PUT Y DELETE ------------------------------------
import storageAdministrator from './routers/administrator.js'
import storageClients from './routers/client.js';
import storageStatus_Loan from './routers/status_loan.js';
import storageLoan from './routers/loan.js';
import storageCategoriesBooks from './routers/categorie_book.js';
import storageBookDescription from './routers/book_description.js';
import storageInventory from './routers/inventory.js';
import storageStatusInventory from './routers/status_inventory.js';

// Consultas ----------------------------------------------------------------
import storageConsultaClient from './routers/consultas/clients.js';
import storageConsultaInventory from './routers/consultas/inventory.js';
import storageConsultaBooks from './routers/consultas/book_description.js';

// Generar Token y validar Tokens de inicio ------------------------------
import generarToken from './middleware/tokens/generarToken.js';
import validarToken from './middleware/tokens/validarToken.js';

appExpress.use("/generarToken/:id/:nombre", generarToken)
// -----------------------------------------------------------------------

appExpress.use("/administrator", validarToken, storageAdministrator);
appExpress.use("/clients", validarToken, storageClients);
appExpress.use("/status_loan", validarToken, storageStatus_Loan);
appExpress.use("/loan", validarToken, storageLoan);
appExpress.use("/categorie_book", validarToken, storageCategoriesBooks);
appExpress.use("/book_description", validarToken, storageBookDescription);
appExpress.use("/inventory", validarToken, storageInventory);
appExpress.use("/status_inventory", validarToken, storageStatusInventory);
// -----------------------------------------------------------------------

appExpress.use("/consultaClients", validarToken, storageConsultaClient);
appExpress.use("/consultaInventory", validarToken, storageConsultaInventory);
appExpress.use("/consultaBooks", validarToken, storageConsultaBooks);
// --------------------------------------------------------------------------

let config = JSON.parse(process.env.MY_CONFIG)
appExpress.listen(config, () => console.log(`http://${config.hostname}:${config.port}`))