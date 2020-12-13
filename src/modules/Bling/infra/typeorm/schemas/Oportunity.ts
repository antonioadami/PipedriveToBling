import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity('oportunidades')
class Oportunity {
    @ObjectIdColumn()
    id: string;

    @Column()
    costumer_name: string;

    @Column()
    date: Date;

    @Column()
    value: number;
}

export default Oportunity;
