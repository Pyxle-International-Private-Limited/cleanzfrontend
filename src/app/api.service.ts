import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getProviders(){
    return this.httpClient.get(`http://localhost:8000/api/providers`);
  }
  getClients(){
    return this.httpClient.get(`http://localhost:8000/api/clients`);
  }
  getEmployees(){
    return this.httpClient.get(`http://localhost:8000/api/employees`);
  }
  getService(){
    return this.httpClient.get(`http://localhost:8000/api/services`);
  }
}
