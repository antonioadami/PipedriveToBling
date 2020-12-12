import { container } from 'tsyringe';
import AxiosProvider from './providers/httpRequests/AxiosProvider';
import IHttpRequestsProvider from './providers/httpRequests/models/IHttpRequestsProvider';

container.registerSingleton<IHttpRequestsProvider>(
    'HttpRequestsProvider',
    AxiosProvider,
);
