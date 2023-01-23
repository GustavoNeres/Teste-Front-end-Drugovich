import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Customer } from 'src/models/customers.module';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  public customerList: Array<Customer> = []


  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

  async ngOnInit() {
    if (window.history.state.newCustomerList) {
      this.customerList = window.history.state.newCustomerList
    }
    if (this.customerList.length === 0) {
      this.saveCustomerList()
    }
  }

  saveCustomerList() {
    this.apiService.getCustomerList()
      .subscribe(customerList => {
        if (customerList) {
          this.customerList = eval(customerList)
        }
      })
  }

  goToCreateEdit(id?: number) {
    this.router.navigate(['create-edit-clients'], { state: { customerList: this.customerList, id: id ? id : null } })
  }
}
