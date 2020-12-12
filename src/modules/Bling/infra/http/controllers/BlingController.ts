import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SearchProductsService from '../../services/SearchProductsService';

export default class BlingController {
    public async GetProducts(resquest: Request, response: Response) {
        const searchProducts = container.resolve(SearchProductsService);
        const data = await searchProducts.execute();
        return response.status(200).json(data);
    }

    public async NewSale(resquest: Request, response: Response) {
        // const searchProducts = container.resolve(SearchProductsService);
        // const data = await searchProducts.execute();
        return response.status(200).json();
    }
}
