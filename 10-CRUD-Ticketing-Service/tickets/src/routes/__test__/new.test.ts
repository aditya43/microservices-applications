import request from 'supertest';
import { app } from '../../app';

it('has a route handler listening to /api/tickets for POST requests', async () => {
    const response = await request(app).post('/api/tickets').send({});

    expect(response.status).not.toEqual(404);
});

it('can only be accessed if the user is signed in', async () => {
    await request(app).post('/api/tickets').send({}).expect(401);
});

it('returns status other than 401 if a user is signed in', async () => {
    const response = await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({});

    expect(response.status).not.toEqual(401);
});

it('returns an error if invalid title is provided', async () => {
    await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            // title: '', // Not sending title at all
            price: 10,
        })
        .expect(400);

    await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            title: '',
            price: 10,
        })
        .expect(400);
});

it('returns an error if invalid price is provided', async () => {
    await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            title: 'ADITYA TESTING',
            // price: 10, // Not sending price at all
        })
        .expect(400);

    await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            title: 'ADITYA TESTING',
            price: -10,
        })
        .expect(400);
});

it('creates a ticket when valid inputs are provided', async () => {
    await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            title: 'ADITYA TESTING',
            price: 20,
        })
        .expect(201);
});
