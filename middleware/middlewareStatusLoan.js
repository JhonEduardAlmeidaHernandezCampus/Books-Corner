import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { dtoStatusLoan } from '../controller/status_loan.js';

const status_loan = (req, res, next) => {
    try {
        let data = plainToClass(dtoStatusLoan, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default status_loan;