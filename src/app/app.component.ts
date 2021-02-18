import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Payment } from './Models/payment.model';
import * as paymentAction from './payment-form/state/payment.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CreditCardPaymentDTO';

  // test =
  //   {
  //     "cardNumber": "5424789321548752",
  //     "cardHolder": "john doe",
  //     "expirationDate": "03/05/2021",
  //     "CCV": "542",
  //     "amount": "1200",
  //     "id":"1"
  //   }

  payments$: Observable<Payment[]> = this.store.select(state=>state.payment);
  pay;

  constructor(private store: Store<any>){ }
  ngOnInit(){
    this.store.dispatch({ type: "[Payment] Load Payment" })
    this.store.subscribe(state => {(this.pay = state.payment.payments);
      console.log("state pas", state.payment.payments);});
    console.log("pay:", this.pay);


  }
}
