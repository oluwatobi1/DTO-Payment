import { Payment } from "src/app/Models/payment.model";

export interface AppState {
  readonly payment: Payment[];
}
