import nats from 'node-nats-streaming';
import { randomBytes } from 'crypto';

const client = nats.connect('ticketing', randomBytes(4).toString('hex'), {
    url: 'http://localhost:4222',
});

client.on('connect', () => {
    console.log('Publisher successfully connected to NATS');

    client.on('close', () => {
        console.log('NATS connection closed!');
        process.exit();
    });

    const data = JSON.stringify({
        id: '123',
        title: 'Aditya Testing',
        price: 20,
    });

    client.publish('ticket:created', data, () => {
        console.log('Event published');
    });
});

process.on('SIGINT', () => client.close());
process.on('SIGTERM', () => client.close());
