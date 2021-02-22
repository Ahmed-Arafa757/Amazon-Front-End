import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../_model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  /* orders:Order[]=[{
    _id: "5ff8c4ac73f4d7524453190c",
    orderItems: [
      {
        productId: '41',
        productName: "HUAWEI Mate 40 Pro",
        amount: 2,
        productInfo: [
          "purple",
          "black"
        ]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01bc",
      totalProducts: 33000,
      shipping: 100,
      totalOrder: 33100,
      currency: "EGP"
    },
    orderDate: "Satrday, December 11,2020 8:30 AM",
    shippingAddress: {
      postalCode: 10000,
      country: "UAE",
      city: "dubai",
      state: "dubai",
      street: "dubai",
      buildingNumber: 1,
      flatNumber: 19,
      floorNumber: 4,
      latitude: 454.42141,
      longitude: 120.26231259
    },
    orderStatus: "completed",
    customerId: "gll7_9014_9740"
  },{
    _id: "5ff8c4ac73f4d7524453190f",
    orderItems: [
      {
        productId: '10',
        productName: "Samsung fold",
        amount: 1,
        productInfo: ["black"]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01ab",
      totalProducts: 22500,
      shipping: 500,
      totalOrder: 23000,
      currency: "EGP"
    },
    orderDate: "Thursday, August 10, 2017 9:50 AM",
    shippingAddress: {
      postalCode: 77310,
      country: "Brazil",
      city: "Clarksburg",
      state: "Federated States Of Micronesia",
      street: "Everit Street",
      buildingNumber: 3,
      flatNumber: 19,
      floorNumber: 4,
      latitude: 53.177938,
      longitude: -159.483934
    },
    orderStatus: "refused",
    customerId: "3bdu_1477_5556"
  },{
    _id: "5ff8c4ac73f4d75244531911",
    orderItems: [
      {
        productId: '37',
        productName: "iPhone X",
        amount: 1,
        productInfo: ["space gray"]
      },
      {
        productId: '36',
        productName: "iPhone XR",
        amount: 1,
        productInfo: ["yellow"]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01c5",
      totalProducts: 19500,
      shipping: 200,
      totalOrder: 19700,
      currency: "EGP"
    },
    orderDate: "Friday, Junuary 8,2021 7:59 PM",
    shippingAddress: {
      postalCode: 41511,
      country: "egypt",
      city: "ismailia",
      state: "ismailia",
      street: "el5amsa",
      buildingNumber: 21,
      flatNumber: 19,
      floorNumber: 4,
      latitude: 105.431341,
      longitude: -0.2659
    },
    orderStatus: "pending",
    customerId: "qi0w_8881_4330"
  },{
    _id: "5ff8c4ac73f4d75244531918",
    orderItems: [
      {
        productId: '16',
        productName: "Samsung Galaxy A21s",
        amount: 2,
        productInfo: [
          "blue",
          "white"
        ]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01c0",
      totalProducts: 17800,
      shipping: 200,
      totalOrder: 18000,
      currency: "EGP"
    },
    orderDate: "Tuesday, Junuary 5,2021 8:45 AM",
    shippingAddress: {
      postalCode: 45260,
      country: "Senegal",
      city: "Matheny",
      state: "Guam",
      street: "Downing Street",
      buildingNumber: 3,
      flatNumber: 19,
      floorNumber: 4,
      latitude: -53.590985,
      longitude: 114.317766
    },
    orderStatus: "shipping",
    customerId: "xg01_2604_9116"
  },{
    _id: "5ff8c4ac73f4d75244531909",
    orderItems: [
      {
        productId: '32',
        productName: "iPhone 11 Pro Max",
        amount: 1,
        productInfo: ["gold"]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01b0",
      totalProducts: 19000,
      shipping: 200,
      totalOrder: 19200,
      currency: "EGP"
    },
    orderDate: "Wednesday, December 11,2019 10:31 AM",
    shippingAddress: {
      postalCode: 41511,
      country: "egypt",
      city: "ismailia",
      state: "ismailia",
      street: "sultan",
      buildingNumber: 10,
      flatNumber: 3,
      floorNumber: 1,
      latitude: 101.432111,
      longitude: 1.2131231
    },
    orderStatus: "completed",
    customerId: "ompr_5534_1542"
  },{
    _id: "5ff8c4ac73f4d7524453190d",
    orderItems: [
      {
        productId: '4',
        productName: "Samsung s7",
        amount: 1,
        productInfo: ["gray"]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01ac",
      totalProducts: 3000,
      shipping: 200,
      totalOrder: 3000,
      currency: "EGP"
    },
    orderDate: "friday, Junuary 1,2021 6:59 AM",
    shippingAddress: {
      postalCode: 41511,
      country: "egypt",
      city: "ismailia",
      state: "shekh zaid",
      street: "togari",
      buildingNumber: 41,
      flatNumber: 20,
      floorNumber: 4,
      latitude: 105.8768671,
      longitude: -0.8754636
    },
    orderStatus: "pending",
    customerId: "iecs_7001_9681"
  },{
    _id: "5ff8c4ac73f4d7524453190b",
    orderItems: [
      {
        productId: '40',
        productName: "iPhone 7",
        amount: 1,
        productInfo: ["rose gold"]
      },
      {
        productId: '38',
        productName: "iPhone 8",
        amount: 1,
        productInfo: ["red"]
      },
      {
        productId: '34',
        productName: "iPhone XS",
        amount: 1,
        productInfo: ["silver"]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01a6",
      totalProducts: 49000,
      shipping: 200,
      totalOrder: 49200,
      currency: "EGP"
    },
    orderDate: "friday, Junuary 1,2020 7:11 PM",
    shippingAddress: {
      postalCode: 12511,
      country: "egypt",
      city: "giza",
      state: "doki",
      street: "doki",
      buildingNumber: 4,
      flatNumber: 1,
      floorNumber: 1,
      latitude: 61.432111,
      longitude: -33.2131231
    },
    orderStatus: "completed",
    customerId: "axl7_1475_9753"
  },{
    _id: "5ff8c4ac73f4d75244531913",
    orderItems: [
      {
        productId: '23',
        productName: "Samsung Galaxy A80",
        amount: 1,
        productInfo: ["gold"]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01b9",
      totalProducts: 6500,
      shipping: 200,
      totalOrder: 6700,
      currency: "EGP"
    },
    orderDate: "Wednesday, December 11,2019 10:31 AM",
    shippingAddress: {
      postalCode: 91265,
      country: "Bahamas",
      city: "Brookfield",
      state: "North Dakota",
      street: "Gatling Place",
      buildingNumber: 10,
      flatNumber: 3,
      floorNumber: 1,
      latitude: 77.651551,
      longitude: -44.4517
    },
    orderStatus: "refused",
    customerId: "iecs_7001_9681"
  },{
    _id: "5ff8c4ac73f4d75244531910",
    orderItems: [
      {
        productId: '49',
        productName: "HUAWEI Y8p",
        amount: 1,
        productInfo: ["green"]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01c1",
      totalProducts: 6710,
      shipping: 200,
      totalOrder: 6910,
      currency: "EGP"
    },
    orderDate: "Friday, Junuary 8,2021 7:55 PM",
    shippingAddress: {
      postalCode: 41511,
      country: "egypt",
      city: "ismailia",
      state: "ismailia",
      street: "el5amsa",
      buildingNumber: 21,
      flatNumber: 19,
      floorNumber: 4,
      latitude: 105.431341,
      longitude: -0.2659
    },
    orderStatus: "out of stock",
    customerId: "qi0w_8881_4330"
  },{
    _id: "5ff8c4ac73f4d7524453191b",
    orderItems: [
      {
        productId: '48',
        productName: "HUAWEI Y5p",
        amount: 1,
        productInfo: ["purple"]
      },
      {
        productId: '47',
        productName: "HUAWEI Y9a",
        amount: 1,
        productInfo: ["black"]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01d6",
      totalProducts: 12400,
      shipping: 200,
      totalOrder: 12600,
      currency: "EGP"
    },
    orderDate: "Friday, Junuary 8,2021 7:59 PM",
    shippingAddress: {
      postalCode: 31511,
      country: "Mozambique",
      city: "Websterville",
      state: "Nevada",
      street: "Jewel Street",
      buildingNumber: 21,
      flatNumber: 19,
      floorNumber: 4,
      latitude: 62.072996,
      longitude: 147.851175
    },
    orderStatus: "pending",
    customerId: "ngsh_5487_7091"
  },{
    _id: "5ff8c4ac73f4d7524453191a",
    orderItems: [
      {
        productId: '1',
        productName: "Samsung s6",
        amount: 1,
        productInfo: ["red"]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01cd",
      totalProducts: 2000,
      shipping: 100,
      totalOrder: 2100,
      currency: "EGP"
    },
    orderDate: "Friday, Junuary 8,2021 7:55 PM",
    shippingAddress: {
      postalCode: 64982,
      country: "Grenada",
      city: "Idledale",
      state: "North Dakota",
      street: "Girard Street",
      buildingNumber: 2,
      flatNumber: 6,
      floorNumber: 1,
      latitude: 1.410638,
      longitude: 119.302638
    },
    orderStatus: "shipping",
    customerId: "5m3w_1521_9518"
  },{
    _id: "5ff8c4ac73f4d7524453190e",
    orderItems: [
      {
        productId: '25',
        productName: "Samsung Galaxy A50",
        amount: 2,
        productInfo: [
          "blue",
          "white"
        ]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01bd",
      totalProducts: 18000,
      shipping: 200,
      totalOrder: 18200,
      currency: "EGP"
    },
    orderDate: "Tuesday, Junuary 5,2021 8:45 AM",
    shippingAddress: {
      postalCode: 41511,
      country: "egypt",
      city: "ismailia",
      state: "3osmason",
      street: "sabry mabdy",
      buildingNumber: 3,
      flatNumber: 19,
      floorNumber: 4,
      latitude: 5.231233,
      longitude: 100.643223
    },
    orderStatus: "shipping",
    customerId: "ml2t_7003_1660"
  },{
    _id: "5ff8c4ac73f4d75244531914",
    orderItems: [
      {
        productId: '44',
        productName: "HUAWEI nova 7",
        amount: 1,
        productInfo: ["purple"]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01c9",
      totalProducts: 8999,
      shipping: 250,
      totalOrder: 9249,
      currency: "EGP"
    },
    orderDate: "Monday, December 11,2017 9:00 PM",
    shippingAddress: {
      postalCode: 38451,
      country: "Antarctica",
      city: "Sharon",
      state: "Iowa",
      street: "Clark Street",
      buildingNumber: 28,
      flatNumber: 30,
      floorNumber: 7,
      latitude: -79.667907,
      longitude: 161.453739
    },
    orderStatus: "completed",
    customerId: "n6qi_8410_5086"
  },{
    _id: "5ff8c4ac73f4d75244531916",
    orderItems: [
      {
        productId: '8',
        productName: "Samsung s8 edge",
        amount: 2,
        productInfo: [
          "purple",
          "black"
        ]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01bf",
      totalProducts: 8400,
      shipping: 100,
      totalOrder: 8500,
      currency: "EGP"
    },
    orderDate: "Satrday, December 11,2020 8:30 AM",
    shippingAddress: {
      postalCode: 61489,
      country: "New Caledonia",
      city: "Dennard",
      state: "Nebraska",
      street: "Pitkin Avenue",
      buildingNumber: 1,
      flatNumber: 19,
      floorNumber: 4,
      latitude: 58.155795,
      longitude: -37.664509
    },
    orderStatus: "completed",
    customerId: "egp7_3421_4924"
  },{
    _id: "5ff8c4ac73f4d75244531912",
    orderItems: [
      {
        productId: '2',
        productName: "Samsung s6+",
        amount: 1,
        productInfo: ["black"]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01b8",
      totalProducts: 2500,
      shipping: 200,
      totalOrder: 2700,
      currency: "EGP"
    },
    orderDate: "Monday, December 11,2017 9:00 PM",
    shippingAddress: {
      postalCode: 91294,
      country: "Qatar",
      city: "Jacumba",
      state: "Illinois",
      street: "Harkness Avenue",
      buildingNumber: 2,
      flatNumber: 9,
      floorNumber: 3,
      latitude: 29.832846,
      longitude: -110.743275
    },
    orderStatus: "completed",
    customerId: "2ap0_5922_5428"
  },{
    _id: "5ff8c4ac73f4d75244531908",
    orderItems: [
      {
        productId: '21',
        productName: "Samsung Galaxy A30s",
        amount: 2,
        productInfo: ["black"]
      },
      {
        productId: '4',
        productName: "Samsung s7",
        amount: 1,
        productInfo: ["gold"]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01af",
      totalProducts: 12300,
      shipping: 200,
      totalOrder: 12500,
      currency: "EGP"
    },
    orderDate: "Monday, December 11,2017 9:00 PM",
    shippingAddress: {
      postalCode: 41511,
      country: "egypt",
      city: "ismailia",
      state: "ismailia",
      street: "el5amsa",
      buildingNumber: 21,
      flatNumber: 19,
      floorNumber: 4,
      latitude: 105.431341,
      longitude: -0.2659
    },
    orderStatus: "completed",
    customerId: "qi0w_8881_4330"
  },{
    _id: "5ff8c4ac73f4d75244531917",
    orderItems: [
      {
        productId: '12',
        productName: "Samsung Galaxy A12",
        amount: 1,
        productInfo: ["gray"]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01bc",
      totalProducts: 8000,
      shipping: 200,
      totalOrder: 8200,
      currency: "EGP"
    },
    orderDate: "friday, Junuary 1,2021 6:59 AM",
    shippingAddress: {
      postalCode: 41511,
      country: "egypt",
      city: "ismailia",
      state: "shekh zaid",
      street: "togari",
      buildingNumber: 41,
      flatNumber: 20,
      floorNumber: 4,
      latitude: 105.8768671,
      longitude: -0.8754636
    },
    orderStatus: "pending",
    customerId: "ra77_7658_1211"
  },{
    _id: "5ff8c4ac73f4d75244531915",
    orderItems: [
      {
        productId: '50',
        productName: "HUAWEI Y8s",
        amount: 1,
        productInfo: ["rose gold"]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01d7",
      totalProducts: 6710,
      shipping: 200,
      totalOrder: 6910,
      currency: "EGP"
    },
    orderDate: "friday, Junuary 1,2020 7:11 PM",
    shippingAddress: {
      postalCode: 90121,
      country: "Cook Islands",
      city: "Cook Islands",
      state: "Connecticut",
      street: "Vanderveer Street",
      buildingNumber: 4,
      flatNumber: 1,
      floorNumber: 1,
      latitude: 67.255496,
      longitude: -105.173288
    },
    orderStatus: "out of stock",
    customerId: "nan2_7127_5562"
  },{
    _id: "5ff8c4ac73f4d7524453190a",
    orderItems: [
      {
        productId: '47',
        productName: "HUAWEI Y9a",
        amount: 1,
        productInfo: ["purple"]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01b5",
      totalProducts: 7750,
      shipping: 150,
      totalOrder: 7900,
      currency: "EGP"
    },
    orderDate: "Monday, December 11,2017 9:00 PM",
    shippingAddress: {
      postalCode: 41511,
      country: "egypt",
      city: "ismailia",
      state: "ismailia",
      street: "el5amsa",
      buildingNumber: 21,
      flatNumber: 19,
      floorNumber: 4,
      latitude: 105.431341,
      longitude: -0.2659
    },
    orderStatus: "completed",
    customerId: "8xcq_6801_9759"
  },{
    _id: "5ff8c4ac73f4d75244531919",
    orderItems: [
      {
        productId: '31',
        productName: "iPhone 11 Pro",
        amount: 1,
        productInfo: ["black"]
      }
    ],
    orderPrice: {
      paymentMethod: "5ff77821ee85d929b7aa01ca",
      totalProducts: 18000,
      shipping: 500,
      totalOrder: 18500,
      currency: "EGP"
    },
    orderDate: "Thursday, August 10, 2017 9:50 AM",
    shippingAddress: {
      postalCode: 77310,
      country: "Brazil",
      city: "Clarksburg",
      state: "Federated States Of Micronesia",
      street: "Everit Street",
      buildingNumber: 3,
      flatNumber: 9,
      floorNumber: 2,
      latitude: 53.177938,
      longitude: -159.483934
    },
    orderStatus: "refused",
    customerId: "jj06_4009_5484"
  }]; */
  baseUrl = 'http://localhost:3000/';
  constructor(private httpClinet : HttpClient) { }
  getAllOrders(){
    return this.httpClinet.get(this.baseUrl+'api/orders');
  }
  orderById(id:string){
    return this.httpClinet.get(this.baseUrl+'api/order/id/'+id);
  }
  updateOrder(order:Order){
    return this.httpClinet.put(this.baseUrl+'api/order/'+order._id,order);
  }
  deleteOrder(id:string){
    return this.httpClinet.delete(this.baseUrl+'api/order/'+id);
  }
  addOrder(order:Order){
    console.log(order);

    return this.httpClinet.post(this.baseUrl+'api/order/add',order);
  }
}
