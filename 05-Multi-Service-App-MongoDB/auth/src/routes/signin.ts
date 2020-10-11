import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (_, res) => {
    res.send('Hello Aditya | Signin Route');
});

export { router as signinRouter };
