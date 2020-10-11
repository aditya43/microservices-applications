import express from 'express';

const router = express.Router();

router.post('/api/users/signup', (_, res) => {
    res.send('Hello Aditya | Signup Route');
});

export { router as signupRouter };
