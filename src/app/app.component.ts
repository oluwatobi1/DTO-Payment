import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Payment } from './Models/payment.model';
import * as paymentAction from './payment-form/state/payment.actions';
import * as fromPayment from './payment-form/state/payment.reducer';


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

  paymentsList$: Observable<Payment[]>;
  paymentsList;
  constructor(private store: Store<fromPayment.AppState>){ }

  ngOnInit(){
    this.store.dispatch(new paymentAction.LoadPayments())
    this.paymentsList$ = this.store.pipe(select(fromPayment.getPayments))


  }
}
