import { Shipments } from './../_model/shipments';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShipmentsService {
shipments:Shipments[]=[
  {
    _id: "5ff8c398a4c6cf417005fcd3",
    userID: "9w2d_9315_7203",
    ordersID: [
      "5ff8ba0e73f4d752445318cc",
      "5ff8c233c63a3d5588676214"
    ],
    deliveryFees: 19,
    totalPrice: 1427,
    shipmentAddress: {
      postalCode: 55666,
      street: "Atkins Avenue",
      state: "Montana",
      city: "Neahkahnie",
      country: "Turkmenistan",
      geoMap: {
        latitude: -63.636726,
        longitude: -164.762078
      }
    },
    deliveryDate: "Friday, February 5, 2021 11:54 AM",
    paymentMethod: "Debit Card",
    shippingCompany: "DACHSER"
  },{
    _id: "5ff8c398a4c6cf417005fcdd",
    userID: "kpgg_6613_7594",
    ordersID: [
      "5ff8c233346fe5fc7dc5f50c",
      "5ff8c233a68c3ea7efe611bf",
      "5ff8c233174e292764f27541"
    ],
    deliveryFees: 28,
    totalPrice: 1572,
    shipmentAddress: {
      postalCode: 29969,
      street: "Marconi Place",
      state: "New Hampshire",
      city: "Nash",
      country: "Mauritius",
      geoMap: {
        latitude: -42.581599,
        longitude: -97.626994
      }
    },
    deliveryDate: "Saturday, January 9, 2021 8:24 AM",
    paymentMethod: "Debit Card",
    shippingCompany: "CEVA"
  },{
    _id: "5ff8c398a4c6cf417005fce1",
    userID: "f1c2_5226_5701",
    ordersID: [
      "5ff8c233292781143f8e7317",
      "5ff8c233bca02e35f4503ae0",
      "5ff8c233d6789f6a98d219b8"
    ],
    deliveryFees: 48,
    totalPrice: 362,
    shipmentAddress: {
      postalCode: 90042,
      street: "Eastern Parkway",
      state: "Wyoming",
      city: "Wintersburg",
      country: "Uruguay",
      geoMap: {
        latitude: 23.975586,
        longitude: 86.539392
      }
    },
    deliveryDate: "Saturday, February 6, 2021 10:35 PM",
    paymentMethod: "Paypal",
    shippingCompany: "CEVA"
  },{
    _id: "5ff8c398a4c6cf417005fd36",
    userID: "wuar_7746_4608",
    ordersID: [
      "5ff8c233e90e30a267a75da2",
      "5ff8c2337dddef29b50938f6",
      "5ff8c233be558c366681ea54"
    ],
    deliveryFees: 46,
    totalPrice: 1654,
    shipmentAddress: {
      postalCode: 85814,
      street: "Kings Hwy",
      state: "Maryland",
      city: "Taft",
      country: "United Kingdom",
      geoMap: {
        latitude: 12.407545,
        longitude: 150.761999
      }
    },
    deliveryDate: "Sunday, February 7, 2021 7:19 AM",
    paymentMethod: "Cash on Delivery",
    shippingCompany: "USPS"
  },{
    _id: "5ff8c398a4c6cf417005fce2",
    userID: "w19d_8706_7438",
    ordersID: [
      "5ff8c2337679605bc7fa8962",
      "5ff8c2334cbb7e0351564286",
      "5ff8c233f6d0926e6dc53bdb"
    ],
    deliveryFees: 22,
    totalPrice: 1890,
    shipmentAddress: {
      postalCode: 95855,
      street: "Seacoast Terrace",
      state: "Utah",
      city: "Russellville",
      country: "Germany",
      geoMap: {
        latitude: 7.173765,
        longitude: -172.33406
      }
    },
    deliveryDate: "Friday, February 5, 2021 4:04 PM",
    paymentMethod: "Cash on Delivery",
    shippingCompany: "DACHSER"
  },{
    _id: "5ff8c398a4c6cf417005fcfb",
    userID: "xan5_7127_9859",
    ordersID: [
      "5ff8c2336d7d3ba26350c885",
      "5ff8c233f93b65a1f1953f90",
      "5ff8c233a5393df9e15c2e2f"
    ],
    deliveryFees: 35,
    totalPrice: 1503,
    shipmentAddress: {
      postalCode: 28091,
      street: "Pine Street",
      state: "Nevada",
      city: "Takilma",
      country: "Croatia (Hrvatska)",
      geoMap: {
        latitude: 49.659493,
        longitude: -145.641912
      }
    },
    deliveryDate: "Saturday, February 6, 2021 8:00 AM",
    paymentMethod: "Paypal",
    shippingCompany: "USPS"
  },{
    _id: "5ff8c398a4c6cf417005fd05",
    userID: "rcch_8391_4829",
    ordersID: [
      "5ff8c233a4c8d8d6d3530619",
      "5ff8c2330f8c4fc7bf364d79",
      "5ff8c23376666c0a66161749"
    ],
    deliveryFees: 37,
    totalPrice: 1135,
    shipmentAddress: {
      postalCode: 57233,
      street: "Vanderveer Place",
      state: "Louisiana",
      city: "Aberdeen",
      country: "Hungary",
      geoMap: {
        latitude: 83.186204,
        longitude: 133.589306
      }
    },
    deliveryDate: "Wednesday, January 27, 2021 2:10 AM",
    paymentMethod: "Paypal",
    shippingCompany: "FedEx"
  },{
    _id: "5ff8c398a4c6cf417005fd0f",
    userID: "8z83_9104_1006",
    ordersID: [
      "5ff8c2334638b705ea79d4c3",
      "5ff8c2330d4df3dae8365bc6",
      "5ff8c23307f591da2fde5998"
    ],
    deliveryFees: 24,
    totalPrice: 1646,
    shipmentAddress: {
      postalCode: 30250,
      street: "Kane Place",
      state: "Guam",
      city: "Bannock",
      country: "Lesotho",
      geoMap: {
        latitude: -11.387115,
        longitude: -77.261652
      }
    },
    deliveryDate: "Sunday, January 24, 2021 3:03 PM",
    paymentMethod: "Debit Card",
    shippingCompany: "DACHSER"
  }

]
  constructor() { }
  getAllUsers(): Shipments[] {
    return this.shipments.slice();
  }

  getSellerById(id: string):Shipments {
    return this.shipments.find((p) => p._id === id);
  }

  addUser(shipment: Shipments) {
    const newShipment: Shipments = {
      _id: shipment._id,
      userID:shipment.userID,
      ordersID: shipment.ordersID,
      deliveryFees:shipment.deliveryFees,
      totalPrice:shipment.totalPrice,
      shipmentAddress: {
          postalCode: shipment.shipmentAddress.postalCode,
          street: shipment.shipmentAddress.street,
          state: shipment.shipmentAddress.state,
          city: shipment.shipmentAddress.city,
          country: shipment.shipmentAddress.country,
          geoMap:shipment.shipmentAddress.geoMap
      },
      deliveryDate: shipment.deliveryDate,
      paymentMethod:shipment.paymentMethod,
      shippingCompany:shipment.shippingCompany,
     
    };
    this.shipments.push(newShipment);
    console.log(this.shipments);
  }

  updateUser(shipment:Shipments): void {
    const index = this.shipments.findIndex((p) => p._id === shipment._id);
    this.shipments[index] = {
      _id: shipment._id,
      userID:shipment.userID,
      ordersID: shipment.ordersID,
      deliveryFees:shipment.deliveryFees,
      totalPrice:shipment.totalPrice,
      shipmentAddress: {
          postalCode: shipment.shipmentAddress.postalCode,
          street: shipment.shipmentAddress.street,
          state: shipment.shipmentAddress.state,
          city: shipment.shipmentAddress.city,
          country: shipment.shipmentAddress.country,
          geoMap:shipment.shipmentAddress.geoMap
      },
      deliveryDate: shipment.deliveryDate,
      paymentMethod:shipment.paymentMethod,
      shippingCompany:shipment.shippingCompany,
     
    };
  }

  deleteUser(id: string) {
    const index = this.shipments.findIndex((p) => p._id === id);
    this.shipments.splice(index, 1);
  }


}
