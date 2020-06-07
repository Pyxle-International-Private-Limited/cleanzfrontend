import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Routes, RouterModule, Router } from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();


    }
    if(this.validateForm.controls["userName"].status == "VALID"){
      this.appComponent.isLoggedIn = true;
      this.router.navigate(['./providers/list']);
    }
  }

  constructor(private fb: FormBuilder, private appComponent: AppComponent, private router: Router) {}

  ngOnInit(): void {
    this.appComponent.isLoggedIn = false;
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
