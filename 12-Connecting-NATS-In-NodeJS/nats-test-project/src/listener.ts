import nats, { Message, Stan } from 'node-nats-streaming';
import { randomBytes } from 'crypto';

const client = nats.connect('ticketing', randomBytes(4).toString('hex'), {
    url: 'http://localhost:4222',
});

client.on('connect', () => {
    console.log('Listener successfully connected to NATS');

    client.on('close', () => {
        console.log('NATS connection closed!');
        process.exit();
    });

    const options = client
        .subscriptionOptions()
        .setManualAckMode(true)
        .setDeliverAllAvailable()
        .setDurableName('accounting-service');

    const subscription = client.subscribe(
        'ticket:created',
        'orders-service-queue-group',
        options,
    );

    subscription.on('message', (msg: Message) => {
        const data = msg.getData();

        if (typeof data === 'string') {
            console.log(
                `Received event #${msg.getSequence()}, with data: ${JSON.parse(
                    data,
                )} `,
            );
        }

        msg.ack(); // Manual acknowledgement
    });
});

process.on('SIGINT', () => client.close());
process.on('SIGTERM', () => client.close());

abstract class Listener {
    abstract subject: string;
    abstract queueGroupName: string;

    protected ackWait = 5 * 1000;

    constructor(private client: Stan) {}
}
