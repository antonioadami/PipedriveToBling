import GetWonDealsService from '@modules/Pipedrive/services/GetWonDealsService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class PipedriveController {
    public async GetWonDeals(request: Request, response: Response) {
        const getWonDeals = container.resolve(GetWonDealsService);
        const data = await getWonDeals.execute();
        return response.status(200).json(data);
    }
}
