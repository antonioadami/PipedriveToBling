import IOportinityDTO from '@modules/Bling/dtos/IOportinityDTO';
import IOpportunitiesRepository from '@modules/Bling/repositories/IOpportunitiesRepository';
import { Document } from 'mongoose';
import Opportunity from '../schemas/Opportunity';

class OpportunitiesRepository implements IOpportunitiesRepository {
    public async create(opportunityData: IOportinityDTO): Promise<Document> {
        const opportunity = new Opportunity(opportunityData);

        await opportunity.save();

        return opportunity;
    }
}

export default OpportunitiesRepository;
