import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sub-services',
  templateUrl: './sub-services.component.html',
  styleUrls: ['./sub-services.component.scss']
})
export class SubServicesComponent implements OnInit {
  subServices : object;
  initialSubServices: object;
  services: object;
  selectedService:any;
  selectedSubServices:object = [];
  subServiceLength:any;
  
  constructor(private apiService: ApiService, private router: Router, private nzMessageService: NzMessageService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.apiService.getSubServices().subscribe((data: any) => {
      this.subServices = data;
      this.initialSubServices = data;
      this.subServiceLength = data.length;
    });
    this.apiService.getServices().subscribe((data: any) => {
      this.services = data;
      this.selectedService = this.services[0];
      this.filterSubServices(this.services[0].servicecode);
    });
  }
  serviceSelect(){
    this.filterSubServices(this.selectedService.servicecode);
  }

  filterSubServices(sCode:any){
    this.subServices = [];
    this.selectedSubServices = [];
    let j=0;
    for (let i = 0; i < this.subServiceLength ; i++) {
      if(this.initialSubServices[i].servicecode == sCode){
          this.selectedSubServices[j] = this.initialSubServices[i];
          j++;
      }
    }
    this.subServices = this.selectedSubServices;
  }

  cancelDelete(): void {
    this.nzMessageService.info('Canceled by user');
  }

  confirmDelete(code:any,name: any): void {
    this.nzMessageService.info('Deleted successfully');
  }
 
}
