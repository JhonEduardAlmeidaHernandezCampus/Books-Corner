import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';
import loan from '../middleware/middlewareLoan.js';
import validarId from '../middleware/validarParams.js';
import generarTokenData from '../middleware/tokens/generarTokenData.js';

dotenv.config();
let storageLoan = Router();

let con = undefined;
storageLoan.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

storageLoan.get("/", (req, res) => {
    con.query(
        `SELECT * FROM loan`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

storageLoan.post("/", generarTokenData, loan, (req, res) => {
    con.query(
        `INSERT INTO loan SET ?`,
        req.body,

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al registrar el prestamo")
            } else {
                res.send("Prestamo registrado con exito")
            }
        }
    )
})

storageLoan.put("/:id", generarTokenData, validarId, loan, (req, res) => {
    con.query(
        `UPDATE loan SET ? WHERE id_Loan = ?`,
        [req.body, req.params],

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al actualizar el registro del prestamo")
            } else {
                res.send("Registro actualizado con exito")
            }
        }
    )
})

storageLoan.delete("/:id", generarTokenData, validarId, (req, res) => {
    con.query(
        `DELETE FROM loan WHERE id_Loan = ?`,
        req.params,

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al eliminar el registro del prestamo")
            } else {
                res.send("Registro eliminado con exito")
            }
        }
    )
})

export default storageLoan;