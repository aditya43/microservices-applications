import { Response } from 'express';
import { CustomError } from '../errors/custom';

export const errorHandler = (err: Error, _, res: Response) => {
    if (err instanceof CustomError) {
        return res
            .status(err.statusCode)
            .send({ errors: err.serializeErrors() });
    }

    return res.status(400).send({
        errors: [{ message: 'Something went wrong' }],
    });
};
