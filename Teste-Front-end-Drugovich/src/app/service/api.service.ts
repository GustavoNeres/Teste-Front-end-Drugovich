import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({ providedIn: 'root' })
export class ApiService {

    constructor(public httpClient: HttpClient) { }

    getCustomerList() {
      return this.httpClient.get('https://demo4231135.mockable.io/', { responseType: 'text' })
    }
}
