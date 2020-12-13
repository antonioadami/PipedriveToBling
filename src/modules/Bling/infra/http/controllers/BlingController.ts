import ListOpportunitiesService from '@modules/Bling/services/ListOpportunitiesService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SearchProductsService from '../../../services/SearchProductsService';

export default class BlingController {
    public async GetOpportunities(request: Request, response: Response) {
        const listOpportunities = container.resolve(ListOpportunitiesService);
        const data = await listOpportunities.execute();
        return response.status(200).json(data);
    }
}
