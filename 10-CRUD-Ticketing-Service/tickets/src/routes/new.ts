import express, { Request, Response } from 'express';
import { requireAuth } from '@adi-microservices/common';

const router = express.Router();

router.post('/api/tickets', requireAuth, (req: Request, res: Response) => {
    res.send(JSON.stringify(req, null, 1));
});

export { router as createTicketRouter };
