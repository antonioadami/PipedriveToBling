import OportunitiesRepository from '@modules/Bling/infra/typeorm/repositories/OportunitiesRepository';
import IOportunitiesRepository from '@modules/Bling/repositories/IOportunitiesRepository';
import { container } from 'tsyringe';
import AxiosProvider from './providers/httpRequests/AxiosProvider';
import IHttpRequestsProvider from './providers/httpRequests/models/IHttpRequestsProvider';

container.registerSingleton<IHttpRequestsProvider>(
    'HttpRequestsProvider',
    AxiosProvider,
);

container.registerSingleton<IOportunitiesRepository>(
    'OportunitiesRepository',
    OportunitiesRepository,
);
