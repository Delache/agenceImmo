import { FormGroup } from '@angular/forms';
import { HouseService } from './../../shared/services/house.service';
import { House } from './../../shared/models/house';
import { Component, OnInit, Input} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-card',
  templateUrl: './admin-card.component.html',
  styleUrls: ['./admin-card.component.css']
})
export class AdminCardComponent implements OnInit {
  @Input() house: House;
  @Input() index: number;
  housesForm: FormGroup;
  constructor(private houseService: HouseService) { }

  ngOnInit() {
  }

  askConfirmDeleteHouse() {
    $('#confirmDeleleModal').modal('show');
  }
  onEditHouse() {
    $('#housesFormModal').modal('show');
  }
  onSubmitHousesForm() {
    const newHouse = this.housesForm.value;
    this.houseService.createHouse(newHouse);
    $('#housesFormModal').modal('hide');
  }

}
