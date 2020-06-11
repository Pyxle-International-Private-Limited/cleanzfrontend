import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ServiceListComponent implements OnInit {
  services : object;

  constructor(private apiService: ApiService, private router: Router,private nzMessageService: NzMessageService) { }

  ngOnInit(): void {
      this.apiService.getServices().subscribe((data)=>{
      this.services = data;
    });
  }
  cancelDelete(): void {
    this.nzMessageService.info('Canceled by user');
  }

  confirmDelete(code:any, name:any): void {
    console.log(code + " and " + name);
    this.nzMessageService.info('Service deleted successfully');
  }


}
