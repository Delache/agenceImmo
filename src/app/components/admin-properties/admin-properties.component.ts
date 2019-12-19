import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {
  propertiesForm: FormGroup;
  constructor(private formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initPropertiesForm();
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
