import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees : object;

  constructor(private apiService: ApiService, private router: Router, private nzMessageService: NzMessageService) { }

  ngOnInit(): void {
      this.apiService.getEmployees().subscribe((data)=>{
      this.employees = data;
    });
  }
  addNewEmployee(){
    this.router.navigate(['#']);
  }
  cancelDelete(): void {
    this.nzMessageService.info('Canceled by user');
  }

  confirmDelete(): void {
    this.nzMessageService.info('Provider deleted successfully');
  }

}
