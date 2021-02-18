import { Action, ActionReducerMap } from "@ngrx/store";

import { Payment } from "../../Models/payment.model";

export enum PaymentActionTypes {
  LOAD_PAYMENT = "[Payment] Load Payment",
  LOAD_PAYMENT_SUCCESS = "[Payment] Load Payment Success",
  LOAD_PAYMENT_FAIL = "[Payment] Load Payment Fail",

  CREATE_PAYMENT = "[Payment] Create Payment",
  CREATE_PAYMENT_SUCCESS = "[Payment] Load Create Success",
  CREATE_PAYMENT_FAIL = "[Payment] Load Create Fail",
}

// Loading all payment actions
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

// create payment
export class CreatePayment implements Action{
  readonly type = PaymentActionTypes.CREATE_PAYMENT
  constructor(public payload:Payment){

  }
}

export class CreatePaymentSuccess implements Action{
  readonly type = PaymentActionTypes.CREATE_PAYMENT_SUCCESS;
  constructor(public payload:Payment){}
}



export class CreatePaymentFail implements Action{
  readonly type = PaymentActionTypes.CREATE_PAYMENT_FAIL
  constructor(public payload: string){}
}



export type Actions = LoadPayments | LoadPaymentsSuccess | LoadPaymentsFail;
