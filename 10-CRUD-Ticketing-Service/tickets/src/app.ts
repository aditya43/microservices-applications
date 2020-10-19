import express from 'express';
import 'express-async-errors';

import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import {
    errorHandler,
    NotFoundError,
    currentUser,
} from '@adi-microservices/common';

import { createTicketRouter } from './routes/new';
import { showTicketRouter } from './routes/show';
import { indexTicketRouter } from './routes/index';

const app = express();
app.set('trust proxy', true); // To make express know that it is behind the proxy of ingress and trust the traffic
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test',
    }),
);

app.use(currentUser);

app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);

app.all('*', async () => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };
