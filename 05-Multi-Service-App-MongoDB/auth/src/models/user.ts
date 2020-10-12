import mongoose from 'mongoose';

// An interface that describes the properties
// required to create a new User
interface UserPropsInterface {
    email: string;
    password: string;
}

// An interface that describes the properties
// that a User model has.
interface UserModelInterface extends mongoose.Model<any> {
    build(params: UserPropsInterface): any;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.statics.build = (params: UserPropsInterface) => new User(params);

const User = mongoose.model<any, UserModelInterface>('User', userSchema);

export { User };
