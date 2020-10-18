import request from 'supertest';
import { app } from '../../app';

it('returns 404 if the ticket is not found', async () => {
    await request(app).get('/api/tickets/fakeTicketId').send().expect(404);
});

it('returns ticket if it is found', async () => {});
