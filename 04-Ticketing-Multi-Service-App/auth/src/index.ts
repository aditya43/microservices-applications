import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/api/users/currentuser', (_, res) => {
    console.log('Aditya Test 123');
    res.send('Hello Aditya');
});

app.listen(3000, () => {
    console.log('Auth service listening on 3000');
});
