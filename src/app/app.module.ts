import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { paymentReducer } from './payment-form/state/payment.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { PaymentEffect } from './payment-form/state/payment.effects';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PaymentFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([PaymentEffect]),
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({
      payment:paymentReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
