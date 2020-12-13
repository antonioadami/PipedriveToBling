import IOportinityDTO from '../dtos/IOportinityDTO';
import Oportunity from '../infra/typeorm/schemas/Oportunity';

export default interface IOportunitiesRepository {
    create(oportunity: IOportinityDTO): Promise<Oportunity>;
}
