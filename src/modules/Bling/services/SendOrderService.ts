import { inject, injectable } from 'tsyringe';

import IHttpRequestsProvider from '@shared/container/providers/httpRequests/models/IHttpRequestsProvider';

@injectable()
export default class SendOrderService {
    constructor(
        @inject('HttpRequestsProvider')
        private httpRequestsProvider: IHttpRequestsProvider,
    ) {}

    async execute(costumerName: string): Promise<any> {
        const xml = `
        <?xml version="1.0" encoding="UTF-8"?>
        <pedido>
            <cliente>
                <nome>${costumerName}</nome>
            </cliente>
            <itens>
                <item>
                <codigo>001</codigo>
                <descricao>Produto 001</descricao>
                <un>Pc</un>
                <qtde>10</qtde>
                <vlr_unit>1.68</vlr_unit>
                </item>
            </itens>
        </pedido>
        `;

        const data = await this.httpRequestsProvider.post(
            `${process.env.BLING_BASE_URL}/pedido/json/?apikey=${process.env.BLING_API_KEY}&xml=${xml}`,

            {},
        );
        return data;
    }
}
