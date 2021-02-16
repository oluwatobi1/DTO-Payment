import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  // CCPayment Reactive Forms

  paymentForm: FormGroup;
  currentdate = new Date()

  constructor() { }

  ngOnInit(): void {
    this.paymentForm = new FormGroup({
      cardNumber: new FormControl('ad', [Validators.minLength(16), Validators.maxLength(16)]),
      cardHolder: new FormControl('', [Validators.maxLength(45)]),
      expirationDate: new FormControl('', []),
      CCV: new FormControl(''),
      amount: new FormControl('')

    })
  }

  onSubmit() {
    console.log(this.paymentForm.value);

  }

}
