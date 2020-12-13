import IHttpRequestsProvider from '@shared/container/providers/httpRequests/models/IHttpRequestsProvider';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class GetWonDealsService {
    constructor(
        @inject('HttpRequestsProvider')
        private httpRequestsProvider: IHttpRequestsProvider,
    ) {}

    async execute(): Promise<void> {
        const deals = await this.httpRequestsProvider.get(
            `${process.env.PIPEDRIVE_BASE_URL}deals?status=won&start=0&api_token=${process.env.PIPEDRIVE_API_TOKEN}`,
        );

        console.log(deals);
    }
}
