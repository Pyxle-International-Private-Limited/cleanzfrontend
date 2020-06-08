import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
  services : object;

  constructor(private apiService: ApiService, private router: Router,private nzMessageService: NzMessageService) { }

  ngOnInit(): void {
      this.apiService.getService().subscribe((data)=>{
      this.services = data;
    });
  }
  cancelDelete(): void {
    this.nzMessageService.info('Canceled by user');
  }

  confirmDelete(): void {
    this.nzMessageService.info('Provider deleted successfully');
  }


}
