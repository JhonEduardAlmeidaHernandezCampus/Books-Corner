import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { dtoClients } from '../controller/clients.js';

const Client = (req, res, next) => {
    try {
        let data = plainToClass(dtoClients, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default Client;