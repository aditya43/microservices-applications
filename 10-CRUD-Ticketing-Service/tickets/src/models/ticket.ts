import mongoose from 'mongoose';

// An interface that describes the properties
// required to create a new Ticket
interface TicketPropsInterface {
    title: string;
    price: number;
    userId: string;
}

// An interface that describes the properties
// that a Ticket model has.
interface TicketModelInterface extends mongoose.Model<TicketDocInterface> {
    build(params: TicketPropsInterface): TicketDocInterface;
}

// An interface that describes the properties
// that a Ticket Document has.
interface TicketDocInterface extends mongoose.Document {
    title: string;
    price: number;
    userId: string;
    createdAt?: string;
    updatedAt?: string;
}

const ticketSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform(_, ret) {
                ret.id = ret._id;
                delete ret._id;
            },
        },
    },
);

ticketSchema.statics.build = (params: TicketPropsInterface) =>
    new Ticket(params);
