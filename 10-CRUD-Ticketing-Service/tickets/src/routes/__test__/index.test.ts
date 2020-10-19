import request from 'supertest';
import { app } from '../../app';

const createTicket = () => {
    return request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            title: 'Adi Test',
            price: 20,
        });
};

it('can fetch a list of tickets', async () => {});
