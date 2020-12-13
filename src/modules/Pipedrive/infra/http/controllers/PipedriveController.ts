import SendOrderService from '@modules/Bling/services/SendOrderService';
import GetWonDealsService from '@modules/Pipedrive/services/GetWonDealsService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class PipedriveController {
    public async GetWonDeals(request: Request, response: Response) {
        const getWonDeals = container.resolve(GetWonDealsService);
        const sendOrder = container.resolve(SendOrderService);
        const data = await getWonDeals.execute();

        if (data.success) {
            const orderPromises = data.data.map(deal => {
                return sendOrder.execute(deal.user_id.name);
            });

            Promise.all(orderPromises).then(order =>
                response.status(200).json(order),
            );
        }
    }
}
