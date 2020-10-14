import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const currentUser = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    if (!req.session?.jwt) {
        return next();
    }

    try {
        req.currentUser = jwt.verify(req.session.jwt, process.env.JWT_KEY!);
    } catch (e) {
        res.send({ currentUser: null });
    }

    next();
};
