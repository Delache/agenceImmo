import { House } from './../models/house';
import { MockHouses } from './../mocks/houses-mock';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  houses: House[] = [];
  housesSubject = new Subject<House[]>();
  constructor() { }

  emitHouses() {
    this.housesSubject.next(this.houses);
  }
  saveHouses() {
    firebase.database().ref('/houses').set(this.houses);
  }
  createHouse(newHouse: House) {
    this.houses.push(newHouse);
    this.saveHouses();
    this.emitHouses();
  }
  deleteHouse(house: House) {
    const index = this.houses.findIndex(
      (propertyEl) => {
        if (propertyEl === house) {
          return true;
        }
      }
    );
    this.houses.splice(index, 1);
    this.saveHouses();
    this.emitHouses();
  }
  getHouses() {
    firebase.database().ref('/houses').on('value', (data) => {
      this.houses = data.val() ? data.val() : [];
      this.emitHouses();
    });
  }
  updateHouse(house: House, id: number) {
    firebase.database().ref('/houses/' + id).update(house);
  }
}

  // getAllHouses() { }

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

