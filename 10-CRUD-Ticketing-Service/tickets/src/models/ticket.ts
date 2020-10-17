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
    email: string;
    password: string;
    createdAt?: string;
    updatedAt?: string;
}

const ticketSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
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
                delete ret.password;
                // delete ret.__v;
            },
        },
    },
);
