import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';

dotenv.config();
let storageConsultaClient = Router();

let con = undefined;
storageConsultaClient.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

// http://127.10.10.10:5010/clients/cantidad
storageConsultaClient.get("/cantidad", (req, res) => {
    con.query(
        `SELECT COUNT(id_Client) AS Cantidad_Clientes FROM clients`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

export default storageConsultaClient;