import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';
import categorie_book from '../middleware/middlewareCategorieBook.js';
import validarId from '../middleware/validarParams.js';

dotenv.config();
let storageCategoriesBooks = Router();

let con = undefined;
storageCategoriesBooks.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

storageCategoriesBooks.get("/", (req, res) => {
    con.query(
        `SELECT * FROM categories_books`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

storageCategoriesBooks.post("/", categorie_book, (req, res) => {
    con.query(
        `INSERT INTO categories_books SET ?`,
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

storageCategoriesBooks.put("/:id", validarId, categorie_book, (req, res) => {
    con.query(
        `UPDATE categories_books SET ? WHERE id_Categorie = ?`,
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

storageCategoriesBooks.delete("/:id", validarId, (req, res) => {
    con.query(
        `DELETE FROM categories_books WHERE id_Categorie = ?`,
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

export default storageCategoriesBooks;