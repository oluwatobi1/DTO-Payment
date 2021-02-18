import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Payment } from '../Models/payment.model';


import * as paymentAction from "./state/payment.actions";
import * as fromPayment from "./state/payment.reducer";

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  // CCPayment Reactive Forms

  paymentForm: FormGroup;
  currentdate = new Date()

  constructor(
    private fb: FormBuilder,
    private store: Store<fromPayment.AppState>
  ) { }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      cardNumber: new FormControl('', [Validators.minLength(16), Validators.maxLength(16)]),
      cardHolder: new FormControl('', [Validators.maxLength(45)]),
      expirationDate: new FormControl('', []),
      CCV: new FormControl(''),
      amount: new FormControl('')

    })
  }

  createPayment() {
    const newPayment: Payment = {
      cardNumber: this.paymentForm.get("cardNumber").value,
      cardHolder: this.paymentForm.get("cardHolder").value,
      expirationDate: this.paymentForm.get("expirationDate").value,
      CCV: this.paymentForm.get("CCV").value,
      amount: this.paymentForm.get("amount").value
    }
    this.store.dispatch(new paymentAction.CreatePayment(newPayment))

    this.paymentForm.reset()
    console.log(newPayment);

  }

}
