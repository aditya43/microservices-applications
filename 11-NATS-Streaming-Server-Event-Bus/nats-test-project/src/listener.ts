import nats from 'node-nats-streaming';
import { randomBytes } from 'crypto';

const client = nats.connect('ticketing', randomBytes(4).toString('hex'), {
    url: 'http://localhost:4222',
});

client.on('connect', () => {
    console.log('Listener connected to NATS');

    const subscription = client.subscribe('ticket:created');

    subscription.on('message', (msg) => {
        console.log('Message Received', msg);
    });
});
