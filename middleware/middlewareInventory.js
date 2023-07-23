import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { dtoInventory } from '../controller/inventory.js';

const inventory = (req, res, next) => {
    try {
        let data = plainToClass(dtoInventory, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default inventory;