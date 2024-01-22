
import { Column, Entity } from "typeorm";
import { CarInterface } from "../interfaces/car.interface";
import { CommonEntity } from "src/common/common.entity";

@Entity()
export class Car extends CommonEntity implements CarInterface {
    @Column({ type: 'citext', nullable: false })
    model : string;
    @Column({ type: 'citext', nullable: false })
    make: string;
    @Column({ type: 'int', nullable: false })
    year: number;
    @Column({ default: true})
    availability:boolean;
    @Column({ type: 'int', nullable: true })
    value:number;
}
