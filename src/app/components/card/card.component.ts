import { HouseService } from './../../shared/services/house.service';
import { House } from './../../shared/models/house';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() house: House;
  title = 'agenceImmo';


  constructor(private houseService: HouseService) { }

  ngOnInit() {
  }
  getSoldValue() {
    if (this.house.sold) {
      return 'red';
    } else {
      return 'green';
    }
}
}
