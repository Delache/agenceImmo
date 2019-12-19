import { MockHouses } from './../mocks/houses-mock';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  houses = MockHouses;
  constructor() { }

// Promise
  getAllHouses() {
    return new Promise(
      (resolve, reject) => {
        if (this.houses && this.houses.length > 0) {
          resolve (this.houses);
        } else {
          const error = new Error('Houses does not exist or is empty');
          reject(error);
        }
      }
    );
  }
}

