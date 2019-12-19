import { House } from './../../shared/models/house';
import { HouseService } from './../../shared/services/house.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {
  constructor(private houseService: HouseService) { }
  houses: House[];

  ngOnInit() {
    this.houseService.getAllHouses().then(
      (data: House[]) => {
        this.houses = data;
        console.log(data);
      }
    ).catch(
      (error) => {
        console.error(error);
      }
    );
  }

}
