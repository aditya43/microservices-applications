import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import request from 'supertest';

import { app } from '../app';

declare global {
    namespace NodeJS {
        interface Global {
            signin(): string[];
        }
    }
}

let mongo: MongoMemoryServer;
beforeAll(async () => {
    process.env.JWT_KEY = 'adityahajare';
    mongo = new MongoMemoryServer();
    const mongoUri = await mongo.getUri();

    await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

beforeEach(async () => {
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
        await collection.deleteMany({});
    }
});

afterAll(async () => {
    await mongo.stop();
    await mongoose.connection.close();
});

global.signin = () => {
    // Build a JWT payload
    const payload = {
        email: 'test@test.com',
        password: 'password',
    };

    // Create JWT
    const token = jwt.sign(payload, process.env.JWT_KEY!);

    // Build session object
    const session = { jwt: token };

    // Turn that session into JSON
    const sessionJSON = JSON.stringify(session);

    // Encode session JSON into Base64
    const base64 = Buffer.from(sessionJSON).toString('base64');

    // Return array of base64 session
    return [`express:sess=${base64}`];
};
