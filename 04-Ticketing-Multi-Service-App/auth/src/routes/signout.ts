import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (_, res) => {
    res.send('Hello Aditya | Signout Route');
});

export { router as signoutRouter };
