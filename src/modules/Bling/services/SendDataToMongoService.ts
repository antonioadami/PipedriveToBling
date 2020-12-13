import { inject, injectable } from 'tsyringe';
import IOportinityDTO from '../dtos/IOportinityDTO';
import Opportunity from '../infra/typeorm/schemas/Opportunity';

import IOpportunitiesRepository from '../repositories/IOpportunitiesRepository';

@injectable()
export default class SendDataToMongoService {
    constructor(
        @inject('OpportunitiesRepository')
        private opportunitiesRepository: IOpportunitiesRepository,
    ) {}

    async execute(opportunityData: IOportinityDTO): Promise<Document> {
        const opportunity = await this.opportunitiesRepository.create(
            opportunityData,
        );

        return opportunity;
    }
}
