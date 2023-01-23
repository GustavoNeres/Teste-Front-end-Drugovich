import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Customer } from 'src/models/customers.module';

@Component({
  selector: 'app-create-edit-clients',
  templateUrl: './create-edit-clients.component.html',
  styleUrls: ['./create-edit-clients.component.scss']
})
export class CreateEditClientsComponent implements OnInit {
  selected: string = 'Ativo'
  itemEditIndex: number = 0

  name = new FormControl('', [Validators.required]);
  cnpj = new FormControl('', [Validators.required]);

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (window.history.state.id) {
      let oldCustomerList = window.history.state.customerList

      this.itemEditIndex = oldCustomerList.findIndex((item: Customer) => item.id === window.history.state.id)

      this.name.setValue(oldCustomerList[this.itemEditIndex].name)
      this.cnpj.setValue(oldCustomerList[this.itemEditIndex].cnpj)
      this.selected = oldCustomerList[this.itemEditIndex].status


      oldCustomerList.splice(this.itemEditIndex, 1);
    }
  }
  save() {
    if (this.name.value?.length == 0 || this.cnpj.value?.length == 0) {
      this.openSnackBar('Por favor preencha todos os campos', 'Fechar')
      return
    }
    let oldCustomerList = window.history.state.customerList


    oldCustomerList.push({
      id: window.history.state.id ? window.history.state.id : oldCustomerList[-1] + 1,
      name: this.name.value,
      cnpj: this.cnpj.value,
      status: this.selected
    })

    this.router.navigate(['customer-list'], { state: { newCustomerList: oldCustomerList } })

    this.openSnackBar('Lista atualizada com sucesso', 'Fechar')
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Este campo é obrigatório';
    }
    if (this.cnpj.hasError('required')) {
      return 'Este campo é obrigatório';
    }

    return this.name.hasError('name') || this.cnpj.hasError('cnpj') ? 'Por favor preencha todos os campos' : '';

  }
}



