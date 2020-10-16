import express from 'express';
import 'express-async-errors';

import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { errorHandler, NotFoundError } from '@adi-microservices/common';

const app = express();
app.set('trust proxy', true); // To make express know that it is behind the proxy of ingress and trust the traffic
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test',
    }),
);

app.all('*', async () => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };
