import { inject, injectable } from 'tsyringe';

import axios from 'axios';
import IHttpRequestsProvider from '@shared/container/providers/httpRequests/models/IHttpRequestsProvider';

@injectable()
export default class SearchProductsService {
    constructor(
        @inject('HttpRequestsProvider')
        private httpRequestsProvider: IHttpRequestsProvider,
    ) {}

    async execute(): Promise<void> {
        const data = await this.httpRequestsProvider.get(
            'https://bling.com.br/Api/v2/produtos/json/?apikey=8dc0fd93505291b2426cb4d3d7170e46809ea48098abfa1bd28f8bd92eeeea0359a0bb80',
        );
        return data;
    }
}
