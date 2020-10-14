import { Request, Response, NextFunction } from 'express';
import { NotAuthorized } from '../errors/not-authorized';

export const requireAuth = (req: Request, _: Response, next: NextFunction) => {
    if (!req.currentUser) {
        throw new NotAuthorized();
    }

    next();
};
