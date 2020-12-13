import { inject, injectable } from 'tsyringe';

import IOpportunitiesRepository from '../repositories/IOpportunitiesRepository';

@injectable()
export default class ListOpportunitiesService {
    constructor(
        @inject('OpportunitiesRepository')
        private opportunitiesRepository: IOpportunitiesRepository,
    ) {}

    async execute(): Promise<Document[]> {
        const opportunities = await this.opportunitiesRepository.list();
        return opportunities;
    }
}
