import { House } from './../models/house';
import { MockHouses } from './../mocks/houses-mock';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  houses = MockHouses;
  housesSubject = new Subject<House[]>();
  constructor() { }

emitHouses() {
  this.housesSubject.next(this.houses);
  }
createHouse(newHouse: House) {
  this.houses.push(newHouse);
}
deleteHouse(index: number) {
    this.houses.splice(index, 1);
}
updateHouse(house: House, index: number) {
  this.houses[index] = house;
  this.emitHouses();
}
editHouse(house: House) {

}

getAllHouses() {}

// Promise:
/*   getAllHouses() {
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
  } */

// Observable:
/* getAllHouses() {
    return new Observable(
      (observer) => {
        if (this.houses && this.houses.length > 0) {
          observer.next(this.houses);
          observer.complete();
        } else {
          const error = new Error('Houses does not exist or is empty');
          observer.error(error);
        }
      }
    );
  } */
}
