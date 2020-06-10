import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class ServiceAddComponent implements OnInit {

  validateForm!: FormGroup;
  result: any = {};

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.result.title=this.validateForm.controls.title.value;

    if(this.validateForm.status ==="VALID"){
      this.successNotification();
    }
  }

  constructor(private fb: FormBuilder, private notification: NzNotificationService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: ["", [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
      isActive: []
    });
  }

  successNotification(): void {
    this.notification.success(
      'Success',
      'Services added successfully.',
      { nzDuration: 2000 }
    );
  }
}
