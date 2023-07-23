import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { dtoStatusInventory } from '../controller/status_inventory.js';

const status_inventory = (req, res, next) => {
    try {
        let data = plainToClass(dtoStatusInventory, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default status_inventory;