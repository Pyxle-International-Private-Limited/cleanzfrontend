import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  clients : object;

  constructor(private apiService: ApiService, private router: Router,private nzMessageService: NzMessageService) { }

  ngOnInit(): void {
      this.apiService.getClients().subscribe((data)=>{
      this.clients = data;
    });
  }
  cancelDelete(): void {
    this.nzMessageService.info('Canceled by user');
  }

  confirmDelete(code:any, name:any): void {
    console.log(code + " and " + name);
    this.nzMessageService.info('Provider deleted successfully');
  }
}