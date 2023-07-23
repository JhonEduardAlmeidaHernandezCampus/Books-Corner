import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';
import Client from '../middleware/middlewareClient.js';
import validarId from '../middleware/validarParams.js';

dotenv.config();
let storageClients = Router();

let con = undefined;
storageClients.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

storageClients.get("/", (req, res) => {
    con.query(
        `SELECT * FROM clients`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

storageClients.post("/", Client, (req, res) => {
    con.query(
        `INSERT INTO clients SET ?`,
        req.body,

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al registrar el cliente")
            } else {
                res.send("Cliente registrado con exito")
            }
        }
    )
})

storageClients.put("/:id", validarId, Client, (req, res) => {
    con.query(
        `UPDATE clients SET ? WHERE id_Client = ?`,
        [req.body, req.params],

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al actualizar el registro del cliente")
            } else {
                res.send("Registro actualizado con exito")
            }
        }
    )
})

storageClients.delete("/:id", validarId, (req, res) => {
    con.query(
        `DELETE FROM Clients WHERE id_Client = ?`,
        req.params,

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al eliminar el registro del cliente")
            } else {
                res.send("Registro eliminado con exito")
            }
        }
    )
})

export default storageClients;