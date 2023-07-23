import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';
import inventory from '../middleware/middlewareInventory.js';
import validarId from '../middleware/validarParams.js';
import generarTokenData from '../middleware/tokens/generarTokenData.js';

dotenv.config();
let storageInventory = Router();

let con = undefined;
storageInventory.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

storageInventory.get("/", (req, res) => {
    con.query(
        `SELECT * FROM inventory`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

storageInventory.post("/", generarTokenData, inventory, (req, res) => {
    con.query(
        `INSERT INTO inventory SET ?`,
        req.body,

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al registrar el inventario")
            } else {
                res.send("Inventario registrado con exito")
            }
        }
    )
})

storageInventory.put("/:id", generarTokenData, validarId, inventory, (req, res) => {
    con.query(
        `UPDATE inventory SET ? WHERE id_Inventory = ?`,
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

storageInventory.delete("/:id", generarTokenData, validarId, (req, res) => {
    con.query(
        `DELETE FROM inventory WHERE id_Inventory = ?`,
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

export default storageInventory;