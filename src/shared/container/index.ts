import OpportunitiesRepository from '@modules/Bling/infra/typeorm/repositories/OpportunitiesRepository';
import IOpportunitiesRepository from '@modules/Bling/repositories/IOpportunitiesRepository';
import { container } from 'tsyringe';
import AxiosProvider from './providers/httpRequests/AxiosProvider';
import IHttpRequestsProvider from './providers/httpRequests/models/IHttpRequestsProvider';

container.registerSingleton<IHttpRequestsProvider>(
    'HttpRequestsProvider',
    AxiosProvider,
);

container.registerSingleton<IOpportunitiesRepository>(
    'OpportunitiesRepository',
    OpportunitiesRepository,
);
