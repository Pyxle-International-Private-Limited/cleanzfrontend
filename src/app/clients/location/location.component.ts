import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, MinLengthValidator } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locations: object;
  initialLocations: object;
  clients: object;
  selectedClient:any;
  selectedLocations:object = [];
  locationLength:any;
  constructor(private apiService: ApiService, private router: Router, private nzMessageService: NzMessageService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.apiService.getClientLocations().subscribe((data: any) => {
      this.locations = data;
      this.initialLocations = data;
      this.locationLength = data.length;
    });
    this.apiService.getClients().subscribe((data: any) => {
      this.clients = data;
      this.selectedClient = this.clients[0];
      this.filterLocations(this.clients[0].clientcode);
    });
  }
  clientSelect(){
    this.filterLocations(this.selectedClient.clientcode);
  }

  filterLocations(cCode:any){
    this.locations = [];
    this.selectedLocations = [];
    let j=0;
    for (let i = 0; i < this.locationLength ; i++) {
      if(this.initialLocations[i].clientcode == cCode){
          this.selectedLocations[j] = this.initialLocations[i];
          j++;
      }
    }
    this.locations = this.selectedLocations;
  }

  cancelDelete(): void {
    this.nzMessageService.info('Canceled by user');
  }

  confirmDelete(code:any,name: any): void {
    this.nzMessageService.info('Deleted successfully');
  }

}
