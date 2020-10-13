import mongoose from 'mongoose';
import { Password } from '../services/password';

// An interface that describes the properties
// required to create a new User
interface UserPropsInterface {
    email: string;
    password: string;
}

// An interface that describes the properties
// that a User model has.
interface UserModelInterface extends mongoose.Model<UserDocInterface> {
    build(params: UserPropsInterface): UserDocInterface;
}

// An interface that describes the properties
// that a User Document has.
interface UserDocInterface extends mongoose.Document {
    email: string;
    password: string;
    createdAt?: string;
    updatedAt?: string;
}

const userSchema = new mongoose.Schema(
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

userSchema.pre('save', async function (done) {
    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
    done();
});

userSchema.statics.build = (params: UserPropsInterface) => new User(params);

const User = mongoose.model<UserDocInterface, UserModelInterface>(
    'User',
    userSchema,
);

export { User };
