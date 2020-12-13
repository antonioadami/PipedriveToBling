import dotenv from 'dotenv';
import App from './app';

dotenv.config();

const app = new App();

app.app.listen(process.env.PORT || 3333, () => {
    console.log('Server started on port 3333!');
});
