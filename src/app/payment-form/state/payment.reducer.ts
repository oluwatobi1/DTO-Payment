import * as paymentAction from "./payment.actions";
import { Payment } from "../../Models/payment.model";

import * as fromRoot from "../state/app-state"
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";




export interface PaymentState extends EntityState<Payment>{
  selectedPaymentId:number | null;
  loading:boolean;
  loaded:boolean;
  error:string;
}

export interface AppState extends fromRoot.AppState{
  payment:PaymentState
}

export const PaymentAdapter: EntityAdapter<Payment>= createEntityAdapter<Payment>()


export const defaultPayment: PaymentState={
  ids:[],
  entities:{},
  selectedPaymentId:null,
  loading:false,
  loaded:false,
  error:'',
}

export const initialState = PaymentAdapter.getInitialState(defaultPayment)

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
      return PaymentAdapter.addMany(action.payload,{
        ...state,
        loading:false,
        loaded:true
      })
    }
    case paymentAction.PaymentActionTypes.LOAD_PAYMENT_FAIL:{
      return {
        ...state,
        entities:{},
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

const getPaymentFeatureState = createFeatureSelector<PaymentState>(
  "payment"
)

export const getPayments= createSelector(
  getPaymentFeatureState,
  PaymentAdapter.getSelectors().selectAll
)
export const getPaymentLoading= createSelector(
  getPaymentFeatureState,(state: PaymentState)=>state.loading
)
export const getPaymentsLoaded= createSelector(
  getPaymentFeatureState,(state: PaymentState)=>state.loaded
)
export const getError= createSelector(
  getPaymentFeatureState,(state: PaymentState)=>state.error
)
