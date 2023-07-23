import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';

dotenv.config();
let storageConsultaBooks = Router();

let con = undefined;
storageConsultaBooks.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

// http://127.10.10.10:5010/books/
storageConsultaBooks.get("/", (req, res) => {
    con.query(
        `SELECT id_Book, name_Book, description, name_Author FROM books_description`,
        req.params.id_Book, 

        (error, data, fill) => {
            res.send(data)
        }
    )
})

export default storageConsultaBooks;