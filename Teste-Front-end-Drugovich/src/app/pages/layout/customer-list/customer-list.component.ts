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
    private ApiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (window.history.state.newCustomerList) {
      this.customerList = window.history.state.newCustomerList
    }
    if (this.customerList.length === 0) {
      this.saveCustomerList()
    }
  }

  saveCustomerList() {
    this.ApiService.getCustomerList()
      .subscribe(customerList => {
        if (customerList) {
          const specialCharacterRemover = String(customerList).replace(/\n/g, '').replace(/(?<=\s+.*)\s+/g, '')
          const convertJSON = JSON.parse(JSON.stringify(specialCharacterRemover))
          this.customerList = eval(convertJSON)
        }
      })
  }

  goToCreateEdit(id?: number) {
    this.router.navigate(['create-edit-clients'], { state: { customerList: this.customerList, id: id ? id : null} })
  }
}
