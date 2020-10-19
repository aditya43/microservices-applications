import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { Ticket } from '../models/ticket';
import {
    requireAuth,
    validateRequest,
    NotFoundError,
    NotAuthorized,
} from '@adi-microservices/common';

const router = express.Router();

router.put('/api/tickets/:id', async (req: Request, res: Response) => {});

export { router as updateTicketRouter };
