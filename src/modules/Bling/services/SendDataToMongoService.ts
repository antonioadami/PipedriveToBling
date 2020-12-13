import { inject, injectable } from 'tsyringe';
import IOportinityDTO from '../dtos/IOportinityDTO';
import Oportunity from '../infra/typeorm/schemas/Oportunity';

import IOportunitiesRepository from '../repositories/IOportunitiesRepository';

@injectable()
export default class SendDataToMongoService {
    constructor(
        @inject('IOportunitiesRepository')
        private oportunitiesRepository: IOportunitiesRepository,
    ) {}

    async execute(oportunityData: IOportinityDTO): Promise<Oportunity> {
        const oportunity = await this.oportunitiesRepository.create(
            oportunityData,
        );

        return oportunity;
    }
}
