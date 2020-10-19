import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';

it('return a 404 if the provided id does not exist', async () => {
    const id = mongoose.Types.ObjectId().toHexString();

    await request(app)
        .put(`/api/tickets/${id}`)
        .set('Cookie', global.signin())
        .send({
            title: 'aslkdfj',
            price: 20,
        })
        .expect(404);
});

it('returns a 401 if the user is not authenticated', async () => {
    const id = mongoose.Types.ObjectId().toHexString();

    await request(app)
        .put(`/api/tickets/${id}`)
        .send({
            title: 'aslkdfj',
            price: 20,
        })
        .expect(401);
});

it('return a 401 if the user does not own the ticket', async () => {
    const response = await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            title: 'aslkdfj',
            price: 20,
        })
        .expect(201);

    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set('Cookie', global.signin())
        .send({
            title: 'aslkdfj1',
            price: 10,
        })
        .expect(401);
});

it('return a 400 if the user provides an invalid title or price', async () => {});

it('updates the ticket provided valid input', async () => {});
