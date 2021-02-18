import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";


import { Payment } from "../Models/payment.model";


@Injectable({providedIn: 'root'})
export class PaymentService {
  private paymentUrl = "http://localhost:3000/paymentDetails";
  constructor(private http:HttpClient) { }

  getPayments(): Observable<Payment[]>{
    return this.http.get<Payment[]>(this.paymentUrl)
  }

  getPaymentsById(payload: number): Observable<Payment>{
    return this.http.get<Payment>(`${this.paymentUrl}/${payload}`)
  }

  createPayment(payload: Payment): Observable<Payment>{
    return this.http.post<Payment>(this.paymentUrl, payload)
  }

  updatePayment(payload: Payment): Observable<Payment>{
    return this.http.post<Payment>(`${this.paymentUrl}/${payload.id}`, payload)
  }
  deletePayment(payload:number){
    return this.http.delete(`${this.paymentUrl}/${payload}`)
  }

}
