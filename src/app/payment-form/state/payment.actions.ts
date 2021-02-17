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

export class LoadPaymentsSuccess implements Action{
  readonly type = PaymentActionTypes.LOAD_PAYMENT_SUCCESS
  constructor(public payload:Payment[]){}
}


export class LoadPaymentsFail implements Action{
  readonly type = PaymentActionTypes.LOAD_PAYMENT_FAIL
  constructor(public payload:string){}
}


export type Actions = LoadPayments | LoadPaymentsSuccess | LoadPaymentsFail;
