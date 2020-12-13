import IOportinityDTO from '@modules/Bling/dtos/IOportinityDTO';
import IOportunitiesRepository from '@modules/Bling/repositories/IOportunitiesRepository';
import { MongoRepository, getMongoRepository } from 'typeorm';
import Oportunity from '../schemas/Oportunity';

class OportunitiesRepository implements IOportunitiesRepository {
    private mongoRepository: MongoRepository<Oportunity>;

    constructor() {
        this.mongoRepository = getMongoRepository(Oportunity, 'mongo');
    }

    public async create(oportunityData: IOportinityDTO): Promise<Oportunity> {
        const oportunity = this.mongoRepository.create(oportunityData);

        await this.mongoRepository.save(oportunity);

        return oportunity;
    }
}

export default OportunitiesRepository;
