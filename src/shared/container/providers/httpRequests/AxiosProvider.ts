import axios from 'axios';
import IHttpRequestsProvider from './models/IHttpRequestsProvider';

export default class AxiosProvider implements IHttpRequestsProvider {
    async get(url: string): Promise<any> {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (err) {
            console.error(err);
            return err;
        }
    }
}
