import { ValidationError } from 'express-validator';

export class DatabaseConnectionError extends Error {
    statusCode = 400;

    constructor(private errors: ValidationError[]) {
        super();
    }
}
