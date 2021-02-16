import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

// CCPayment Reactive Forms

  paymentForm = new FormGroup({

    cardNumber: new FormControl(''),
    cardHolder: new FormControl(''),
    expirationDate: new FormControl(''),
    CCV: new FormControl(''),
    amount: new FormControl('')

  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.paymentForm.value);

  }

}
