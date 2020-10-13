import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import { User } from '../models/user';
import { RequestValidationError } from '../errors/request-validation';
import { BadRequestError } from '../errors/bad-request';

const router = express.Router();

router.post(
    '/api/users/signup',
    [
        body('email').isEmail().withMessage('Email must be valid'),
        body('password')
            .trim()
            .isLength({ min: 4, max: 20 })
            .withMessage('Password must be between 4 and 20 characters'),
    ],
    async (req: Request, res: Response) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw new RequestValidationError(errors.array());
        }

        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new BadRequestError('Email address already in use');
        }

        const user = User.build({ email, password });
        await user.save();

        // Generate JWT
        const userJwt = jwt.sign(
            {
                id: user.id,
                email: user.email,
            },
            process.env.JWT_KEY!,
        );

        // Store JWT on session object
        req.session = { jwt: userJwt };

        return res.status(201).send(user);
    },
);

export { router as signupRouter };
