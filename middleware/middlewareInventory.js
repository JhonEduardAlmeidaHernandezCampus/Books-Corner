import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { dtoInventory } from '../controller/inventory.js';
import { jwtVerify } from 'jose';
import dotenv from 'dotenv';

dotenv.config();

const inventory = async(req, res, next) => {

    const encoder = new TextEncoder();
    const jwtData = await jwtVerify(req.body, encoder.encode(process.env.MY_JWT))

    let comparar = {
        ID_Book: null,
        ID_Status_Inventory: null,
        Count: null,
    }

    let { iat, exp, ...copia} = jwtData.payload;

    if(JSON.stringify(Object.keys(comparar)) === JSON.stringify(Object.keys(copia))){
        try {
            req.body = copia
            let data = plainToClass(dtoInventory, req.body, {excludeExtraneousValues: true})
            req.body = data;
            next();
        } catch (error) {
            res.status(error.status).send(error)
        }
    } else {
        res.status(400).send("Error en las keys")
    }
}

export default inventory;