import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';

dotenv.config();
let storageConsultaClient = Router();

let con = undefined;
storageConsultaClient.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

// http://127.10.10.10:5010/clients/cantidad
storageConsultaClient.get("/cantidad", (req, res) => {
    con.query(
        `SELECT COUNT(id_Client) AS Cantidad_Clientes FROM clients`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5010/clients/penalthy
storageConsultaClient.get("/penalthy", (req, res) => {
    con.query(
        `SELECT id_Client, name_Client, tel_Client, email_Client, direccion_Client, start_Loan, end_Loan, penalthy_Cost FROM clients INNER JOIN loan ON clients.id_Client = loan.id_Client_fk WHERE penalthy_Cost = 1000`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5010/clients/libro/1
storageConsultaClient.get("/libro/:id_Book", (req, res) => {
    con.query(
        `SELECT id_Client, name_Client, tel_Client, id_Book, name_Book, books_description.description FROM clients INNER JOIN loan ON clients.id_Client = loan.id_Client_fk INNER JOIN inventory ON loan.id_Inventory_fk = inventory.id_Inventory INNER JOIN books_description ON inventory.id_Book_fk = books_description.id_Book WHERE id_Book = ?`,
        req.params.id_Book,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5010/clients/status/
storageConsultaClient.get("/status/", (req, res) => {
    con.query(
        `SELECT id_Client, name_Client, tel_Client, name_Status FROM clients INNER JOIN loan ON clients.id_Client = loan.id_Client_fk INNER JOIN status_Loan ON loan.id_Status_Loan_fk = status_Loan.id_Status WHERE id_Status = 2`,
        req.params.id_Book,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5010/clients/categoria/
storageConsultaClient.get("/categoria/", (req, res) => {
    con.query(
        `SELECT id_Client, name_Client, tel_Client, id_Book, name_Book, name_Author, name_Categorie, start_Loan, end_Loan FROM clients INNER JOIN loan ON clients.id_Client = loan.id_Client_fk INNER JOIN inventory ON loan.id_Inventory_fk = inventory.id_Inventory INNER JOIN books_description ON inventory.id_Book_fk = books_description.id_Book INNER JOIN categories_books ON books_description.id_Categorie_fk = categories_books.id_Categorie WHERE id_Categorie = 3`,
        req.params.id_Book,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5010/clients/loan/1041566753
storageConsultaClient.get("/loan/:id_Client/", (req, res) => {
    con.query(
        `SELECT id_Client, name_Client, tel_Client, name_Status FROM clients INNER JOIN loan ON clients.id_Client = loan.id_Client_fk INNER JOIN status_Loan ON loan.id_Status_Loan_fk = status_Loan.id_Status WHERE id_Client = ? && id_Status = 1`,
        req.params.id_Client,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5010/clients/loan/1041566753
storageConsultaClient.get("/penalthy/:id_Client/", (req, res) => {
    con.query(
        `SELECT id_Client, name_Client, tel_Client, name_Status FROM clients INNER JOIN loan ON clients.id_Client = loan.id_Client_fk INNER JOIN status_Loan ON loan.id_Status_Loan_fk = status_Loan.id_Status WHERE id_Client = ? && id_Status = 2`,
        req.params.id_Client,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

export default storageConsultaClient;