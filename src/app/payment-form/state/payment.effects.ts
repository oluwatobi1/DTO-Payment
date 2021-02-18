import { Injectable } from '@angular/core';

import { Action } from "@ngrx/store";
import {  Actions, Effect, ofType } from "@ngrx/effects";



import { Observable, of } from "rxjs";
import { map, mergeMap, catchError, switchMap } from "rxjs/operators";

import { Payment } from "../../Models/payment.model";
import * as paymentAction from "./payment.actions";
import { PaymentService } from "../../payment-form/payment-form.service";



@Injectable()
export class PaymentEffect {
  constructor(
    private actions$:Actions,
    private paymentService:PaymentService
    ) { }

  @Effect()
  loadPayments$:Observable<Action> = this.actions$.pipe(
      ofType<paymentAction.LoadPayments>(
        paymentAction.PaymentActionTypes.LOAD_PAYMENT_SUCCESS
      ),
      mergeMap((actions:paymentAction.LoadPayments)=>
        this.paymentService.getPayments().pipe(
          map(
            (payments: Payment[])=>
         new paymentAction.LoadPaymentsSuccess(payments),
          ),
          catchError(err =>of(new paymentAction.LoadPaymentsFail(err)))
        )
        ))

}
