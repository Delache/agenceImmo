import { Subscription } from 'rxjs';
import { House } from '../../shared/models/house';
import { HouseService } from '../../shared/services/house.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy} from '@angular/core';
import * as $ from 'jquery';




@Component({
  selector: 'app-admin-houses',
  templateUrl: './admin-houses.component.html',
  styleUrls: ['./admin-houses.component.css']
})
export class AdminHousesComponent implements OnInit, OnDestroy {
  housesForm: FormGroup;
  houses: House [];
  housesSubscription: Subscription;

  constructor(private formbuilder: FormBuilder,
              private houseService: HouseService) {
  }

  ngOnInit() {
    this.initHousesForm();
    this.housesSubscription =  this.houseService.housesSubject.subscribe(
      (data: House[]) => {
        this.houses = data;
      }
    );
    this.houseService.emitHouses();
  }
  initHousesForm() {
    this.housesForm = this.formbuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      surface: ['', Validators.required],
      rooms: ['', Validators.required],
      description: '',
      price: ['', Validators.required]
    });
  }
  onSubmitHousesForm() {
    const newHouse = this.housesForm.value;
    this.houseService.createHouse(newHouse);
    $('#housesFormModal').modal('hide');
  }
  resetForm() {
    this.housesForm.reset();
  }
  ngOnDestroy() {
    this.housesSubscription.unsubscribe();
  }
}
