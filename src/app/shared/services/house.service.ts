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
  indexToUpdate: number;
  indexToDelete: number;

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
  deleteHouse() {
    this.houses.splice(this.indexToDelete, 1);
    this.saveHouses();
    this.emitHouses();
    this.indexToDelete = undefined;
  }
  getHouses() {
    firebase.database().ref('/houses').on('value', (data) => {
      this.houses = data.val() ? data.val() : [];
      this.emitHouses();
    });
  }
  updateHouse(house: House) {
    firebase.database().ref('/houses/' + this.indexToUpdate).update(house);
    this.indexToUpdate = undefined;
  }

  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const uniqueId = Date.now().toString();
        const upload = firebase.storage().ref().child('images/houses/' + uniqueId + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Loading...');
          },
          (error) => {
            console.log('Error ! : ' + error);
            reject();
          },
          () => {
            upload.snapshot.ref.getDownloadURL().then((downloadURL) => {
              console.log('Ok:' + downloadURL );
              resolve(downloadURL);
            });
          }
        );
      }
    );
  }

removeHousePhoto(photoLink: string) {
    if (photoLink) {
      const storageRef = firebase.storage().refFromURL(photoLink);
      storageRef.delete().then(
        () => {
          console.log('File deleted');
        }
      ).catch(
        (error) => {
          console.log('File not found : ' + error);
        }
      );
    }
  }

  /* getSingleProperty(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/houses/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        );
      }
    ); */
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

