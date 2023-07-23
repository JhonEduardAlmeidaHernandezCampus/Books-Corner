import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';

dotenv.config();
let storageConsultaInventory = Router();

let con = undefined;
storageConsultaInventory.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

// http://127.10.10.10:5010/inventory/cantidad/13
storageConsultaInventory.get("/cantidad/:id_Book", (req, res) => {
    con.query(
        `SELECT id_Inventory, id_Book, name_Book, description, name_Author, quantity_Book FROM inventory INNER JOIN books_description ON inventory.id_Book_fk = books_description.id_Book WHERE id_Book = ?`,
        req.params.id_Book, 

        (error, data, fill) => {
            res.send(data)
        }
    )
})

export default storageConsultaInventory;