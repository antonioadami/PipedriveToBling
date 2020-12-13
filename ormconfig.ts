export default {
    type: 'mongodb',
    url: process.env.MONGO_URL,
    useNewUrlParser: true,
    synchronize: true,
    logging: true,
    entities: ['src/entity/*.*'],
};
