import { House } from './../../shared/models/house';
import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-admin-card',
  templateUrl: './admin-card.component.html',
  styleUrls: ['./admin-card.component.css']
})
export class AdminCardComponent implements OnInit {
  @Input() house: House;
  constructor() { }

  ngOnInit() {
  }

}
