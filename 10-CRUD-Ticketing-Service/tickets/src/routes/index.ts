import express, { Request, Response } from 'express';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/tickets', async (_: Request, res: Response) => {
    const tickets = await Ticket.find({});

    return res.send(tickets);
});

export { router as indexTicketRouter };
