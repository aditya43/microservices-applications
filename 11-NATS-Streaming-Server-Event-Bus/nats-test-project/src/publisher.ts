import nats from 'node-nats-streaming';

const client = nats.connect('ticketing', 'abc', {
    url: 'http://localhost:4222',
});

client.on('connect', () => {
    console.log('Publisher connected to NATS');
});
