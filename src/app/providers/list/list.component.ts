import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  providers : object;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
      this.apiService.getProviders().subscribe((data)=>{
      this.providers = data;
    });
  }

  addNewProvider(){
    this.router.navigate(['./providers/add']);
  }
}
