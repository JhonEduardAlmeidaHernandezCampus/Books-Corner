import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';
import status_inventory from '../middleware/middlewareStatusInventory.js';
import validarId from '../middleware/validarParams.js';

dotenv.config();
let storageStatusInventory = Router();

let con = undefined;
storageStatusInventory.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

storageStatusInventory.get("/", (req, res) => {
    con.query(
        `SELECT * FROM status_inventory`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

storageStatusInventory.post("/", status_inventory, (req, res) => {
    con.query(
        `INSERT INTO status_inventory SET ?`,
        req.body,

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al registrar el status")
            } else {
                res.send("Status registrado con exito")
            }
        }
    )
})

storageStatusInventory.put("/:id", validarId, status_inventory, (req, res) => {
    con.query(
        `UPDATE status_inventory SET ? WHERE id_Status = ?`,
        [req.body, req.params],

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al actualizar el registro")
            } else {
                res.send("Registro actualizado con exito")
            }
        }
    )
})

storageStatusInventory.delete("/:id", validarId, (req, res) => {
    con.query(
        `DELETE FROM status_inventory WHERE id_Status = ?`,
        req.params,

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al eliminar el registro")
            } else {
                res.send("Registro eliminado con exito")
            }
        }
    )
})

export default storageStatusInventory;