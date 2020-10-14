import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { validateRequest } from '../middlewares/validate-request';
import { BadRequestError } from '../errors/bad-request';

import { User } from '../models/user';
import { PasswordManager } from '../services/password-manager';

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

        // Generate JWT
        const userJwt = jwt.sign(
            {
                id: existingUser.id,
                email: existingUser.email,
            },
            process.env.JWT_KEY!,
        );

        // Store JWT on session object
        req.session = { jwt: userJwt };

        return res.status(200).send(existingUser);
    },
);

export { router as signinRouter };
