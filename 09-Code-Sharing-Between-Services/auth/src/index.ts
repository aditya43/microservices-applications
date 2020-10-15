import { app } from './app';
import mongoose from 'mongoose';

const init = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY is not set in environment');
    }

    try {
        await mongoose.connect('mongodb://auth-mongo-svc:27017/auth', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });

        console.info('Connected to Auth MongoDB');
    } catch (error) {
        console.error(error);
    }

    app.listen(3000, () => {
        console.log('Auth service listening on port 3000');
    });
};

init();
