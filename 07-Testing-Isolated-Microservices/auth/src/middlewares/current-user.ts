import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
    id: string;
    email: string;
    createdAt?: string;
    updatedAt?: string;
}

declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload | null;
        }
    }
}

export const currentUser = (req: Request, _: Response, next: NextFunction) => {
    if (!req.session?.jwt) {
        return next();
    }

    try {
        req.currentUser = jwt.verify(
            req.session.jwt,
            process.env.JWT_KEY!,
        ) as UserPayload;
    } catch (e) {
        req.currentUser = null;
    }

    next();
};
