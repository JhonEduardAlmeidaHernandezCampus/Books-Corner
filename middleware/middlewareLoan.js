import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { dtoLoan } from '../controller/loan.js';
import { jwtVerify } from 'jose';
import dotenv from 'dotenv';

dotenv.config();

const loan = async(req, res, next) => {

    const encoder = new TextEncoder();
    const jwtData = await jwtVerify(req.body, encoder.encode(process.env.MY_JWT))

    let comparar = {
        Cc_Client: null,
        End_Date: null,
        Status_Loan: null,
        ID_Inventory: null,
        Description: null,
        Penalthy: null,
    }

    let { iat, exp, ...copia} = jwtData.payload;

    if(JSON.stringify(Object.keys(comparar)) === JSON.stringify(Object.keys(copia))){
        try {
            req.body = copia
            let data = plainToClass(dtoLoan, req.body, {excludeExtraneousValues: true})
            req.body = data;
            next();
        } catch (error) {
            res.status(error.status).send(error)
        }
    } else {
        res.status(400).send("Error en las keys")
    }
}

export default loan;