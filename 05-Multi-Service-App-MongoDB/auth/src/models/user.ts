import mongoose from 'mongoose';

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
    },
);

userSchema.statics.build = (params: UserPropsInterface) => new User(params);

const User = mongoose.model<UserDocInterface, UserModelInterface>(
    'User',
    userSchema,
);

export { User };
