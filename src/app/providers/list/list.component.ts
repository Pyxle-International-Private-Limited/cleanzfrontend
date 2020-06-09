import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  providers : object;

  constructor(private apiService: ApiService, private router: Router, private nzMessageService: NzMessageService) { }

  ngOnInit(): void {
      this.apiService.getProviders().subscribe((data)=>{
      this.providers = data;
    });
  }

  cancelDelete(): void {
    this.nzMessageService.info('Canceled by user');
  }

  confirmDelete(code:any,name: any): void {
    console.log(code + " and " + name);
    this.nzMessageService.info('Provider deleted successfully');
  }
}
