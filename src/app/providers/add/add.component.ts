import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  validateForm!: FormGroup;
  result: any = {};

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.result.name=this.validateForm.controls.name.value;
    this.result.address=this.validateForm.controls.address.value;
    this.result.email=this.validateForm.controls.email.value;
    this.result.phone=this.validateForm.controls.phone.value;
    this.result.isActive=this.validateForm.controls.isActive.value;
    debugger
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: ["", [Validators.required]],
      address: [],
      email: ["",[Validators.required]],
      phone: [],
      isActive: []
    });
  }
}
