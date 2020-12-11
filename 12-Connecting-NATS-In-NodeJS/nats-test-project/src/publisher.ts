import nats from 'node-nats-streaming';
import { randomBytes } from 'crypto';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';

const client = nats.connect('ticketing', randomBytes(4).toString('hex'), {
    url: 'http://localhost:4222',
});

client.on('connect', async () => {
    console.log('Publisher successfully connected to NATS');

    const publisher = new TicketCreatedPublisher(client);

    try {
        await publisher.publish({
            id: '123',
            title: 'Aditya Test Concert Ticket',
            price: 20,
        });
    } catch (err) {
        console.error(err);
    }
});
