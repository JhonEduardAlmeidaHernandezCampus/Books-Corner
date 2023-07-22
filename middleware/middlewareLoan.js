import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { dtoLoan } from '../controller/loan.js';

const loan = (req, res, next) => {
    try {
        let data = plainToClass(dtoLoan, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default loan;