export interface PaymentMethod {
  id?: number;
  paymentMethod?: string;
  paypalAccountName?: string;
  cardCompany?: string;
  cardEndingNum?: string;
  cardExpires?: string;
  cardOwnerName?: string;
  currentCurrency?: string;
  convertedCurrency?: string;
  userID?: string;
}
