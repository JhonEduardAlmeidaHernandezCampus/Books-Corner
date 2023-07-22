import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';
import book_description from '../middleware/middlewareBookDescription.js';

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

storageBookDescription.post("/", book_description, (req, res) => {
    con.query(
        `INSERT INTO books_description SET ?`,
        req.body,

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al registrar la categoria")
            } else {
                res.send("Categoria registrada con exito")
            }
        }
    )
})

storageBookDescription.put("/:id_Book", book_description, (req, res) => {
    con.query(
        `UPDATE books_description SET ? WHERE id_Book = ?`,
        [req.body, req.params.id_Book],

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

storageBookDescription.delete("/:id_Book", (req, res) => {
    con.query(
        `DELETE FROM books_description WHERE id_Book = ?`,
        req.params.id_Book,

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