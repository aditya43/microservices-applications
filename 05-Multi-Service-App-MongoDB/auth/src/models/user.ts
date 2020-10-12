import mongoose from 'mongoose';

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

const User = mongoose.model('User', userSchema);

// An interface to describe what attributes
// are allowed and required by User
interface UserInterface {
    email: string;
    password: string;
}

userSchema.statics.create = (params: UserInterface) => new User(params);

export { User };
