import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Payment } from './Models/payment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CreditCardPaymentDTO';
  payments;
  test;

  constructor(private store: Store<any>){ }

  ngOnInit(){
    this.store.dispatch({type:"LOAD_PAYMENTS"})
    this.store.subscribe(state=>(this.payments = state.payment.paymentDetails))
  }
}
