import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { dtoAdministrator } from '../controller/administrator.js';

const administrator = (req, res, next) => {
    try {
        let data = plainToClass(dtoAdministrator, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default administrator;