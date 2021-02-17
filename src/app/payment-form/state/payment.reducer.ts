import * as paymentAction from "./payment.actions";
import { Payment } from "../../Models/payment.model";

import * as fromRoot from "../state/app-state"

export interface PaymentState {
  payment:Payment[],
  loading:boolean,
  loaded:boolean,
  error:string,
}

export interface AppState extends fromRoot.AppState{
  payment:PaymentState
}

export const initialState = {
  payment:[],
  loading:false,
  loaded:true,
}

export function paymentReducer(state=initialState, action:paymentAction.Actions){
  switch (action.type){
    case paymentAction.PaymentActionTypes.LOAD_PAYMENT:{
      return {
        ...state,
        loading:true,
        loaded:false
      }
    }
    case paymentAction.PaymentActionTypes.LOAD_PAYMENT_SUCCESS:{
      return {
        ...state,
        loading:false,
        loaded:true,
        payments: action.payload
      }
    }
    case paymentAction.PaymentActionTypes.LOAD_PAYMENT_FAIL:{
      return {
        ...state,
        loading:false,
        loaded:true,
        error:action.payload
      }
    }
    default:{
      return state;
    }
  }
}
