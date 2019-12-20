import { HouseService } from './../../shared/services/house.service';
import { House } from './../../shared/models/house';
import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-admin-card',
  templateUrl: './admin-card.component.html',
  styleUrls: ['./admin-card.component.css']
})
export class AdminCardComponent implements OnInit {
  @Input() house: House;
  @Input() index: number;
  constructor(private houseService: HouseService) { }

  ngOnInit() {
  }
  onDeleteHouse() {
    this.houseService.deleteHouse(this.index);
  }

}
