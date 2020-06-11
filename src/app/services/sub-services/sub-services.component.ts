import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-sub-services',
  templateUrl: './sub-services.component.html',
  styleUrls: ['./sub-services.component.scss']
})
export class SubServicesComponent implements OnInit {
  services : object;

  constructor(private apiService: ApiService, private router: Router,private nzMessageService: NzMessageService) { }

  ngOnInit(): void {
      this.apiService.getServices().subscribe((data)=>{
      this.services = data;
    });
  }
 
}
