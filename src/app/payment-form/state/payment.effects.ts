import { Injectable } from '@angular/core';

import { Action } from "@ngrx/store";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";



import { Observable, of } from "rxjs";
import { map, mergeMap, catchError, switchMap } from "rxjs/operators";

import { Payment } from "../../Models/payment.model";
import * as paymentAction from "./payment.actions";
import { PaymentService } from "../../payment-form/payment-form.service";



@Injectable()
export class PaymentEffect {
  constructor(
    private actions$: Actions,
    private paymentService: PaymentService
  ) { }


  loadPayments$ = createEffect(() => this.actions$.pipe(
    ofType<paymentAction.LoadPayments>(
      paymentAction.PaymentActionTypes.LOAD_PAYMENT
    ),
    mergeMap((actions: paymentAction.LoadPayments) =>
      this.paymentService.getPayments().pipe(
        map(
          (paymentDetails: Payment[]) =>
            new paymentAction.LoadPaymentsSuccess(paymentDetails),
        ),
        catchError(err => of(new paymentAction.LoadPaymentsFail(err)))
      ))
  ));

  createPayments$ = createEffect(() => this.actions$.pipe(
    ofType<paymentAction.CreatePayment>(
      paymentAction.PaymentActionTypes.CREATE_PAYMENT
    ),
    map((action:paymentAction.CreatePayment)=>action.payload),
    mergeMap((payment: Payment) =>
      this.paymentService.createPayment(payment).pipe(
        map((newPayment:Payment)=>new paymentAction.CreatePaymentSuccess(newPayment)),
        catchError(err => of(new paymentAction.CreatePaymentFail(err)))
      ))
  ))

}
