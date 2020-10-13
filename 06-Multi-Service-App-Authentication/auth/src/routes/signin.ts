import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validate-request';
import { BadRequestError } from '../errors/bad-request';

import { User } from '../models/user';
import { PasswordManager } from '../services/password';

const router = express.Router();

router.post(
    '/api/users/signin',
    [
        body('email').isEmail().withMessage('Invalid Email Address!'),
        body('password')
            .trim()
            .notEmpty()
            .withMessage('Password cannot be empty!'),
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            throw new BadRequestError('Invalid credentials');
        }

        const match = await PasswordManager.compare(
            existingUser.password,
            password,
        );

        if (!match) {
            throw new BadRequestError('Invalid credentials');
        }
    },
);

export { router as signinRouter };
