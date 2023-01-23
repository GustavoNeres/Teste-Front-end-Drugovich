import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/models/customers.module';

@Component({
  selector: 'customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent implements OnInit {

  @Input() name?: string
  @Input() cnpj?: string
  @Input() status?: string
  @Input() id?: number
  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }
  goToEdit(){
    this.edit.emit(this.id)
  }

}
