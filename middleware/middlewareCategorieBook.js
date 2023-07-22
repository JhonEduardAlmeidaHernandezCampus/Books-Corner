import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { dtoCategorieBooks } from '../controller/categorie_book.js';

const categorie_book = (req, res, next) => {
    try {
        let data = plainToClass(dtoCategorieBooks, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default categorie_book;