import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';
import status_loan from '../middleware/middlewareStatusLoan.js';

dotenv.config();
let storageStatus_Loan = Router();

let con = undefined;
storageStatus_Loan.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

storageStatus_Loan.get("/", (req, res) => {
    con.query(
        `SELECT * FROM status_loan`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

storageStatus_Loan.post("/", status_loan, (req, res) => {
    con.query(
        `INSERT INTO status_loan SET ?`,
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

storageStatus_Loan.put("/:id_Status", status_loan, (req, res) => {
    con.query(
        `UPDATE status_loan SET ? WHERE id_Status = ?`,
        [req.body, req.params.id_Status],

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

storageStatus_Loan.delete("/:id_Status", (req, res) => {
    con.query(
        `DELETE FROM status_loan WHERE id_Status = ?`,
        req.params.id_Status,

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

export default storageStatus_Loan;