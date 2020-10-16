import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/api/tickets', (req: Request, res: Response) => {
    res.send(JSON.stringify(req, null, 1));
});

export { router as createTicketRouter };
