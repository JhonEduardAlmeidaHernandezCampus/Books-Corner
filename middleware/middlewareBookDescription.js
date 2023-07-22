import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { dtoBookDescription } from '../controller/book_description.js';

const book_description = (req, res, next) => {
    try {
        let data = plainToClass(dtoBookDescription, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default book_description;