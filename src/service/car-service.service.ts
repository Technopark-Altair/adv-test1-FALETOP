import { Injectable } from '@angular/core';
import { Cars } from 'src/model/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarServiceService {
  cars: Array<Cars> = [
    {
      id: 0,
      brandName: 'Lamborghini',
      modelName: 'Gallardo, 2013',
      priceInRub: 14500000,
    },
    {
      id: 1,
      brandName: 'Audi',
      modelName: 'A6,2021',
      priceInRub: 4227800,
    },
    {
      id: 2,
      brandName: 'BMW',
      modelName: 'X6 M,2011',
      priceInRub: 1500000,
    },
  ];
  constructor() {}

  getCars() {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars.find((el) => el.id === id);
  }
}
