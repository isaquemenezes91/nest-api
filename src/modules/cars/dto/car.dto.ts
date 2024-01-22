import { Exclude, Expose } from "class-transformer";
import { CarInterface } from "../interfaces/car.interface";

@Exclude()
export class CarDTO implements CarInterface{
    @Expose()
    id: string;
    @Expose()
    createdAt: Date;
    @Expose()
    updatedAt: Date;
    @Expose()
    model : string;
    @Expose()
    make: string;
    @Expose()
    year: number;
    @Expose()
    availability:boolean;
    @Expose()
    value:number;
}