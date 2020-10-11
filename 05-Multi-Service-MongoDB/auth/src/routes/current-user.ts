import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (_, res) => {
    console.log('Aditya Test 123');
    res.send('Hello Aditya');
});

export { router as currentUserRouter };
