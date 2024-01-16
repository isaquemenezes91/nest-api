import { CarInterface } from "../interfaces/car.interface";

export class Car implements CarInterface {
    id:string;
    model : string;
    make: string;
    year: number;
}
