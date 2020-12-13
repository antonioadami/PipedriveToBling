import { inject, injectable } from 'tsyringe';

import IHttpRequestsProvider from '@shared/container/providers/httpRequests/models/IHttpRequestsProvider';

@injectable()
export default class SendOrderService {
    constructor(
        @inject('HttpRequestsProvider')
        private httpRequestsProvider: IHttpRequestsProvider,
    ) {}

    async execute(costumerName: string): Promise<void> {
        const xml = `
        <?xml version="1.0" encoding="UTF-8"?>
        <pedido>
            <cliente>
                <nome>${costumerName}</nome>
            </cliente>
        </pedido>
        `;
        const data = await this.httpRequestsProvider.post(
            `${process.env.BLING_BASE_URL}/pedido/json/?apikey=${process.env.BLING_API_KEY}&xml=${xml}`,

            {},
        );
        return data;
    }
}
