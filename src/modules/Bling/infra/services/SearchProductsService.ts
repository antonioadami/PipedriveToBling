import { inject, injectable } from 'tsyringe';

import IHttpRequestsProvider from '@shared/container/providers/httpRequests/models/IHttpRequestsProvider';

@injectable()
export default class SearchProductsService {
    constructor(
        @inject('HttpRequestsProvider')
        private httpRequestsProvider: IHttpRequestsProvider,
    ) {}

    async execute(): Promise<void> {
        const xml = `
        <?xml version="1.0" encoding="UTF-8"?>
        <pedido>
            <cliente>
                <nome>Organisys Software</nome>
            </cliente>
        </pedido>
        `;
        const data = await this.httpRequestsProvider.post(
            // `https://bling.com.br/Api/v2/pedido/json/?apikey=8dc0fd93505291b2426cb4d3d7170e46809ea48098abfa1bd28f8bd92eeeea0359a0bb80&xml=${xml}`,
            `${process.env.BLING_BASE_URL}/pedido/json/?apikey=${process.env.BLING_API_KEY}&xml=${xml}`,

            {},
        );
        return data;
    }
}
