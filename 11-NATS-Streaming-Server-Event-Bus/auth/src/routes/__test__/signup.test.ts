import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password',
        })
        .expect(201);
});

it('returns a 400 for an invalid email', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test.com',
            password: 'password',
        })
        .expect(400);
});

it('returns a 400 for an invalid password', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'p',
        })
        .expect(400);
});

it('returns a 400 for missing email or password', async () => {
    await request(app) // No need to return if using await.
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
        })
        .expect(400);

    await request(app) // No need to return if using await.
        .post('/api/users/signup')
        .send({
            password: 'aditya12345',
        })
        .expect(400);
});

it('disallows duplicate emails', async () => {
    await request(app) // No need to return if using await.
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'aditya12345',
        })
        .expect(201);

    await request(app) // No need to return if using await.
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'aditya12345',
        })
        .expect(400);
});

it('sets a cookie after successful signup', async () => {
    const response = await request(app) // No need to return if using await.
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'aditya12345',
        })
        .expect(201);

    expect(response.get('Set-Cookie')).toBeDefined();
});
