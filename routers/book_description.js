import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';
import book_description from '../middleware/middlewareBookDescription.js';
import validarId from '../middleware/validarParams.js';
import generarTokenData from '../middleware/tokens/generarTokenData.js';

dotenv.config();
let storageBookDescription = Router();

let con = undefined;
storageBookDescription.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

storageBookDescription.get("/", (req, res) => {
    con.query(
        `SELECT * FROM books_description`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

storageBookDescription.post("/", generarTokenData, book_description, (req, res) => {
    con.query(
        `INSERT INTO books_description SET ?`,
        req.body,

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al registrar el libro")
            } else {
                res.send("Libro registrado con exito")
            }
        }
    )
})

storageBookDescription.put("/:id", generarTokenData, validarId, book_description, (req, res) => {
    con.query(
        `UPDATE books_description SET ? WHERE id_Book = ?`,
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

storageBookDescription.delete("/:id", generarTokenData, validarId, (req, res) => {
    con.query(
        `DELETE FROM books_description WHERE id_Book = ?`,
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

export default storageBookDescription;