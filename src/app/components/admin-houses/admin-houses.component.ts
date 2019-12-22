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
  editMode = false;




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
    this.houseService.getHouses();
    this.houseService.emitHouses();
  }
  initHousesForm() {
    this.housesForm = this.formbuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      surface: ['', Validators.required],
      rooms: ['', Validators.required],
      description: '',
      price: ['', Validators.required],
      sold: '',
    });
  }
  onSubmitHousesForm() {
    const newHouse = this.housesForm.value;
    if (this.editMode) {
      this.houseService.updateHouse(newHouse);
    } else {
    this.houseService.createHouse(newHouse); }
    $('#housesFormModal').modal('hide');
  }
  resetForm() {
    this.editMode = false;
    this.housesForm.reset();
  }
  onDeleteHouse() {
    this.houseService.deleteHouse();
    $('#confirmDeleleModal').modal('hide');
  }
  ngOnDestroy() {
    this.housesSubscription.unsubscribe();
  }
  askConfirmDeleteHouse(index: number) {
    $('#confirmDeleleModal').modal('show');
    this.houseService.indexToDelete = index;
  }
  onEditHouse(house: House, index: number) {
    $('#housesFormModal').modal('show');
    this.editMode = true;
    this.housesForm.get('title').setValue(house.title);
    this.housesForm.get('category').setValue(house.category);
    this.housesForm.get('surface').setValue(house.surface);
    this.housesForm.get('rooms').setValue(house.rooms);
    this.housesForm.get('price').setValue(house.price);
    this.housesForm.get('description').setValue(house.description);
    this.housesForm.get('sold').setValue(house.sold);
    this.houseService.indexToUpdate = index;
  }
}
