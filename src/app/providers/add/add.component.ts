import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, MinLengthValidator } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

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

    if(this.validateForm.status ==="VALID"){
      this.successNotification();
    }
  }

  constructor(private fb: FormBuilder, private notification: NzNotificationService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: ["", [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
      address: ["",[Validators.email, Validators.required]],
      email: ["",[Validators.email, Validators.required]],
      phone: ["",[Validators.required]],
      isActive: []
    });
  }

  successNotification(): void {
    this.notification.success(
      'Success',
      'Provider added successfully.',
      { nzDuration: 2000 }
    );
  }
}
