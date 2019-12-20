import { Subscription } from 'rxjs';
import { House } from './../../shared/models/house';
import { HouseService } from './../../shared/services/house.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy} from '@angular/core';




@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit, OnDestroy {
  propertiesForm: FormGroup;
  houses: House [];
  housesSubscription: Subscription;
  constructor(private formbuilder: FormBuilder, private houseService: HouseService) {
  }

  ngOnInit() {
    this.initPropertiesForm();
    this.housesSubscription =  this.houseService.housesSubject.subscribe(
      (data: House[]) => {
        this.houses = data;
      }
    );
    this.houseService.emitHouses();
  }
  ngOnDestroy() {
    this.housesSubscription.unsubscribe();
  }

  initPropertiesForm() {
    this.propertiesForm = this.formbuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      surface: ['', Validators.required],
      rooms: ['', Validators.required],
      description: '',
      price: ['', Validators.required]
    });
  }
  onSubmitPropertiesForm() {
    console.log(this.propertiesForm.value);
  }
}
