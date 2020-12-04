import { Listener } from './abstract-listener';

class TicketCreatedListener extends Listener {
    subject = 'ticket:created';
    queueGroupName = 'payments-service';

    onMessage(data: any, msg: Message) {
        console.log(`Event Data: ${data}`);

        msg.ack();
    }
}
