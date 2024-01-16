import { CarInterface } from "../interfaces/car.interface";

export class CarDTO implements CarInterface{
    model : string;
    make: string;
    year: number;
}