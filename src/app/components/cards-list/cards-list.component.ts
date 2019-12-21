import { Observable, Subscription} from 'rxjs';
import { House } from './../../shared/models/house';
import { HouseService } from './../../shared/services/house.service';
import { Component, OnInit, OnDestroy } from '@angular/core';



@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit , OnDestroy {
  houses: House[];
  housesSubscription: Subscription;

constructor(private houseService: HouseService) { }


ngOnInit() {
   // Version avec promise
/*     this.houseService.getAllHouses().then(
      (data: House[]) => {
        this.houses = data;
        console.log(data);
      }
    ).catch(
      (error) => {
        console.error(error);
      }
    ); */

    // Version Observable
    this.housesSubscription =  this.houseService.housesSubject.subscribe(
      (data: House[]) => {
        this.houses = data;
      }
    );
    this.houseService.getHouses();
    this.houseService.emitHouses();
  }
ngOnDestroy() {
    this.housesSubscription.unsubscribe();
  }

}
