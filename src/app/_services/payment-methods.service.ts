import { PaymentMethod } from '../_model/payment-methods';

export class PaymentMethodsService {
  paymentMethods: PaymentMethod[] = [
    {
      id: 1,
      paymentMethod: 'Debit Card',
      cardCompany: 'MasterCard',
      cardEndingNum: '4810',
      cardExpires: '10/2022',
      cardOwnerName: 'Marcia Kub',
      currentCurrency: 'GBP',
      convertedCurrency: 'CAD',
      userID: 'qxgk_4695_9606',
    },

    {
      id: 2,
      paymentMethod: 'Paypal',
      paypalAccountName: 'Harry Schamberger',
      currentCurrency: 'CAD',
      convertedCurrency: 'SAR',
      userID: 'nan2_7127_5562',
    },

    {
      id: 3,

      paymentMethod: 'Credit Card',
      cardCompany: 'MasterCard',
      cardEndingNum: '6873',
      cardExpires: '1/2024',
      cardOwnerName: 'Bethany Davis',
      currentCurrency: 'EGP',
      convertedCurrency: 'EGP',
      userID: 'p88g_8591_2694',
    },

    {
      id: 4,

      paymentMethod: 'Paypal',
      paypalAccountName: 'Wayne Runolfsson',
      currentCurrency: 'EGP',
      convertedCurrency: 'EUR',
      userID: 'q2zx_7032_5071',
    },

    {
      id: 5,

      paymentMethod: 'Paypal',
      paypalAccountName: 'Ruby Fisher Jr.',
      currentCurrency: 'CAD',
      convertedCurrency: 'EUR',
      userID: 'ik8h_1420_9214',
    },

    {
      id: 6,

      paymentMethod: 'Debit Card',
      cardCompany: 'MasterCard',
      cardEndingNum: '5642',
      cardExpires: '3/2024',
      cardOwnerName: 'Ora Kutch',
      currentCurrency: 'USD',
      convertedCurrency: 'JPY',
      userID: 'tgik_7541_7128',
    },

    {
      id: 7,

      paymentMethod: 'Paypal',
      paypalAccountName: 'Lena Murazik IV',
      currentCurrency: 'CAD',
      convertedCurrency: 'SAR',
      userID: 'r9co_5914_5532',
    },

    {
      id: 8,
      paymentMethod: 'Paypal',
      paypalAccountName: 'Lena Murazik IV',
      currentCurrency: 'CAD',
      convertedCurrency: 'SAR',
      userID: 'r9co_5914_5532',
    },

    {
      id: 9,

      paymentMethod: 'Debit Card',
      cardCompany: 'Visa',
      cardEndingNum: '8405',
      cardExpires: '11/2025',
      cardOwnerName: 'Ada Spencer',
      currentCurrency: 'EUR',
      convertedCurrency: 'USD',
      userID: 'v9ib_7623_5897',
    },

    {
      id: 10,

      paymentMethod: 'Credit Card',
      cardCompany: 'Visa',
      cardEndingNum: '1793',
      cardExpires: '8/2024',
      cardOwnerName: 'Moses Bailey',
      currentCurrency: 'USD',
      convertedCurrency: 'EGP',
      userID: 'tg4c_7626_9973',
    },

    {
      id: 11,

      paymentMethod: 'Cash on Delivery',
      currentCurrency: 'USD',
      userID: 'thm1_2177_9321',
    },

    {
      id: 12,
      paymentMethod: 'Cash on Delivery',
      currentCurrency: 'USD',
      userID: 'thm1_2177_9321',
    },

    {
      id: 13,
      paymentMethod: 'Cash on Delivery',
      currentCurrency: 'CAD',
      userID: 'huh3_2784_6772',
    },

    {
      id: 14,
      paymentMethod: 'Paypal',
      paypalAccountName: 'Miss Clayton Sipes',
      currentCurrency: 'EGP',
      convertedCurrency: 'GBP',
      userID: 'egp7_3421_4924',
    },

    {
      id: 15,
      paymentMethod: 'Debit Card',
      cardCompany: 'Visa',
      cardEndingNum: '1753',
      cardExpires: '5/2023',
      cardOwnerName: 'Mr. Bernadette Olson',
      currentCurrency: 'GBP',
      convertedCurrency: 'GBP',
      userID: '0skv_1333_5941',
    },

    {
      id: 16,
      paymentMethod: 'Credit Card',
      cardCompany: 'MasterCard',
      cardEndingNum: '4606',
      cardExpires: '5/2022',
      cardOwnerName: 'Renee Boyle',
      currentCurrency: 'EGP',
      convertedCurrency: 'USD',
      userID: 'za1c_8424_6150',
    },

    {
      id: 17,
      paymentMethod: 'Debit Card',
      cardCompany: 'MasterCard',
      cardEndingNum: '7778',
      cardExpires: '7/2025',
      cardOwnerName: 'Mrs. Jesse Gorczany',
      currentCurrency: 'CAD',
      convertedCurrency: 'EUR',
      userID: 'ppjh_5946_8561',
    },

    {
      id: 18,
      paymentMethod: 'Cash on Delivery',
      currentCurrency: 'JPY',
      userID: 'wemx_9478_2546',
    },

    {
      id: 19,
      paymentMethod: 'Cash on Delivery',
      currentCurrency: 'JPY',
      userID: 'wemx_9478_2546',
    },
    {
      id: 20,
      paymentMethod: 'Debit Card',
      cardCompany: 'Visa',
      cardEndingNum: '5422',
      cardExpires: '5/2023',
      cardOwnerName: 'Marvin Boyer',
      currentCurrency: 'SAR',
      convertedCurrency: 'EUR',
      userID: '8gxf_4089_4492',
    },
  ];

  getAllPaymentMethods(): PaymentMethod[] {
    return this.paymentMethods.slice();
  }

  getPaymentMethodById(id: number): PaymentMethod {
    return this.paymentMethods.find((p) => p.id === id);
  }

  addPaymentMethod(paymentMethod: PaymentMethod) {
    const newPaymentMethod: PaymentMethod = {
      id: paymentMethod.id,
      paymentMethod: paymentMethod.paymentMethod,
      paypalAccountName: paymentMethod.paypalAccountName,
      cardCompany: paymentMethod.cardCompany,
      cardEndingNum: paymentMethod.cardEndingNum,
      cardExpires: paymentMethod.cardExpires,
      cardOwnerName: paymentMethod.cardOwnerName,
      currentCurrency: paymentMethod.currentCurrency,
      convertedCurrency: paymentMethod.convertedCurrency,
      userID: paymentMethod.userID,
    };
    this.paymentMethods.push(newPaymentMethod);
  }

  updateReview(paymentMethod: PaymentMethod) {
    const index = this.paymentMethods.findIndex(
      (p) => p.id === paymentMethod.id
    );

    this.paymentMethods[index] = {
      paymentMethod: paymentMethod.paymentMethod,
      paypalAccountName: paymentMethod.paypalAccountName,
      cardCompany: paymentMethod.cardCompany,
      cardEndingNum: paymentMethod.cardEndingNum,
      cardExpires: paymentMethod.cardExpires,
      cardOwnerName: paymentMethod.cardOwnerName,
      currentCurrency: paymentMethod.currentCurrency,
      convertedCurrency: paymentMethod.convertedCurrency,
    };
  }

  deleteReview(id: number) {
    const index = this.paymentMethods.findIndex((p) => p.id === id);
    this.paymentMethods.splice(index, 1);
  }
}
