import express from 'express';
import 'express-async-errors';

import { json } from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found';

const app = express();
app.set('trust proxy', true); // To make express know that it is behind the proxy of ingress and trust the traffic
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: true,
    }),
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async () => {
    throw new NotFoundError();
});

app.use(errorHandler);

const init = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY is not set in environment');
    }

    try {
        await mongoose.connect('mongodb://auth-mongo-svc:27017/auth', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });

        console.info('Connected to Auth MongoDB');
    } catch (error) {
        console.error(error);
    }

    app.listen(3000, () => {
        console.log('Auth service listening on port 3000');
    });
};

init();
