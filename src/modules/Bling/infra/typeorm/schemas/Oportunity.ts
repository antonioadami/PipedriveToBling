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
    value: string;
}

export default Oportunity;
