import { inject, injectable } from 'tsyringe';

import IHttpRequestsProvider from '@shared/container/providers/httpRequests/models/IHttpRequestsProvider';

@injectable()
export default class SearchProductsService {
    constructor(
        @inject('HttpRequestsProvider')
        private httpRequestsProvider: IHttpRequestsProvider,
    ) {}

    async execute(): Promise<void> {
        const products = await this.httpRequestsProvider.get(
            `${process.env.BLING_BASE_URL}/produtos/json/?apikey=${process.env.BLING_API_KEY}`,
        );
        return products;
    }
}
