import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { dtoStatusInventory } from '../controller/status_inventory.js';
import { jwtVerify } from 'jose';
import dotenv from 'dotenv';

dotenv.config();

const status_inventory = async(req, res, next) => {

    const encoder = new TextEncoder();
    const jwtData = await jwtVerify(req.body, encoder.encode(process.env.MY_JWT))

    let comparar = {
        Name: null,
    }

    let { iat, exp, ...copia} = jwtData.payload;

    if(JSON.stringify(Object.keys(comparar)) === JSON.stringify(Object.keys(copia))){
        try {
            req.body = copia
            let data = plainToClass(dtoStatusInventory, req.body, {excludeExtraneousValues: true})
            req.body = data;
            next();
        } catch (error) {
            res.status(error.status).send(error)
        }
    } else {
        res.status(400).send("Error en las keys")
    }
}

export default status_inventory;