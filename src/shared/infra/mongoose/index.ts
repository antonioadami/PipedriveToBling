import mongoose from 'mongoose';

console.log(process.env.MONGO_URL);

mongoose.connect(
    'mongodb+srv://antonio:antonio@cluster0.y80kx.mongodb.net/AntonioDB?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
);
