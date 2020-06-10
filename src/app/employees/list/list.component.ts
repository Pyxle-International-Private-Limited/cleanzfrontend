import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees : object;

  constructor(private apiService: ApiService, private router: Router, private nzMessageService: NzMessageService) { }

  ngOnInit(): void {
      this.apiService.getEmployees().subscribe((data)=>{
      this.employees = data;
    });
  }
  cancelDelete(): void {
    this.nzMessageService.info('Canceled by user');
  }

  confirmDelete(code:any, name:any): void {
    console.log(code + " and " + name);
    this.nzMessageService.info('Employee deleted successfully');
  }

}
