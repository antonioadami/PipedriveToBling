import IOportinityDTO from '../dtos/IOportinityDTO';

export default interface IOpportunitiesRepository {
    create(opportunityData: IOportinityDTO): Promise<Document>;
    list(): Promise<Document[]>;
}
