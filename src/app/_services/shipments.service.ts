import { Shipments } from './../_model/shipments';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShipmentsService {
  shipments: Shipments[];

  constructor(private http: HttpClient) {}
  getAllUsers(): Shipments[] {
    return this.shipments.slice();
  }

  getSellerById(id: string): Shipments {
    return this.shipments.find((p) => p._id === id);
  }

  addShipment(shipment: Shipments) {
    const newShipment: Shipments = {
      userID: shipment.userID,
      ordersID: shipment.ordersID,
      deliveryFees: shipment.deliveryFees,
      totalPrice: shipment.totalPrice,
      shipmentAddress: shipment.shipmentAddress,
      deliveryDate: shipment.deliveryDate,
      paymentMethod: shipment.paymentMethod,
      shippingCompany: shipment.shippingCompany,
    };

    this.http
      .post(
        'https://iti-amzon-backend.herokuapp.com/api/shipments',
        newShipment
      )
      .subscribe((responseShipment) => {
        console.log(responseShipment);
      });
  }

  updateUser(shipment: Shipments): void {
    const index = this.shipments.findIndex((p) => p._id === shipment._id);
    this.shipments[index] = {
      _id: shipment._id,
      userID: shipment.userID,
      ordersID: shipment.ordersID,
      deliveryFees: shipment.deliveryFees,
      totalPrice: shipment.totalPrice,
      shipmentAddress: {
        postalCode: shipment.shipmentAddress.postalCode,
        street: shipment.shipmentAddress.street,
        state: shipment.shipmentAddress.state,
        city: shipment.shipmentAddress.city,
        country: shipment.shipmentAddress.country,
        geoMap: shipment.shipmentAddress.geoMap,
      },
      deliveryDate: shipment.deliveryDate,
      paymentMethod: shipment.paymentMethod,
      shippingCompany: shipment.shippingCompany,
    };
  }

  deleteUser(id: string) {
    const index = this.shipments.findIndex((p) => p._id === id);
    this.shipments.splice(index, 1);
  }
}
