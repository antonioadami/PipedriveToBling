import 'reflect-metadata';
import SearchProductsService from '@modules/Bling/infra/services/SearchProductsService';
import { container } from 'tsyringe';
import dotenv from 'dotenv';
import App from './app';

const app = new App();

dotenv.config();

app.server.listen(3333, () => {
    console.log('Server started on port 3333!');
    const searchProducts = container.resolve(SearchProductsService);
    searchProducts.execute();
});
