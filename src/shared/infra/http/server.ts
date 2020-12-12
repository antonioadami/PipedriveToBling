import dotenv from 'dotenv';
import App from './app';

const app = new App();

dotenv.config();

app.server.listen(3333, () => {
    console.log('Server started on port 3333!');
});
