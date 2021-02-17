import { Action } from "@ngrx/store";

import { Payment } from "../../Models/payment.model";

export enum PaymentActionTypes {
  LOAD_PAYMENT = "[Payment] Load Payment",
  LOAD_PAYMENT_SUCCESS = "[Payment] Load Payment Success",
  LOAD_PAYMENT_FAIL = "[Payment] Load Payment Fail"
}


export class LoadPayments implements Action{
  readonly type = PaymentActionTypes.LOAD_PAYMENT
}

export class LoadPaymentSuccess implements Action{
  readonly type = PaymentActionTypes.LOAD_PAYMENT_SUCCESS
  constructor(private payload:Payment[]){}
}


export class LoadPaymentFail implements Action{
  readonly type = PaymentActionTypes.LOAD_PAYMENT_FAIL
  constructor(private payload:string){}
}
