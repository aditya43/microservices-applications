import express from 'express';
import { json } from 'body-parser';

import { currentUserRouter } from './routes/curent-user';

const app = express();
app.use(json());
app.use(currentUserRouter);

app.listen(3000, () => {
    console.log('Auth service listening on 3000');
});
