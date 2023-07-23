import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validarID } from '../controller/validar.js';

const validarId = (req, res, next) => {
    try {
        let data = plainToClass(validarID, req.params.id, {excludeExtraneousValues: true})
        req.params = data;

        if (isNaN(req.params)) {
            res.status(400).send("Error en los parametros de ID")
        } else {
            next();
        }

    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default validarId;