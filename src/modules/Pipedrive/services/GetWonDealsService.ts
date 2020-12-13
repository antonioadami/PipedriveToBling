import IHttpRequestsProvider from '@shared/container/providers/httpRequests/models/IHttpRequestsProvider';
import { inject, injectable } from 'tsyringe';

interface Deal {
    success: boolean;
    data: Data[];
}

interface User {
    id: string;
    name: string;
    email: string;
    has_pic: number;
    pic_hash: string;
    active_flag: true;
    value: number;
}

interface Data {
    id: number;
    creator_user_id: User;
    user_id: User;
    person_id: number;
}

@injectable()
export default class GetWonDealsService {
    constructor(
        @inject('HttpRequestsProvider')
        private httpRequestsProvider: IHttpRequestsProvider,
    ) {}

    async execute(): Promise<Deal> {
        const deals = await this.httpRequestsProvider.get(
            `${process.env.PIPEDRIVE_BASE_URL}/deals?status=won&start=0&api_token=${process.env.PIPEDRIVE_API_TOKEN}`,
        );

        return deals;
    }
}
