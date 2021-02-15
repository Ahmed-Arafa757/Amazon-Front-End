import { Injectable } from '@angular/core';
import { warehouse } from '../_model/warehouses';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  warehouses: warehouse[];
  constructor() {
    this.warehouses = [
      /* 1 */
      {
        _id: '5ff7b6bb1c1a3e395fc30537',
        name: 'Ismalia Warehouse',
        location: '15th canal university district, Ismalia, Egypt',
        totalOrders: 1500.0,
        totalProducts: 5000.0,
        isFull: false,
      },

      /* 2 */
      {
        _id: '5ff7b7c11c1a3e395fc30538',
        name: 'Cairo Warehouse',
        location:
          '18 El Khalifa El Maamoun St.,Below ESC - Eye Subspecialty Center HELIOPOLIS, CAIRO',
        totalOrders: 56400.0,
        totalProducts: 543000.0,
        isFull: false,
      },

      /* 3 */
      {
        _id: '5ff7b8151c1a3e395fc30539',
        name: 'Alex Warehouse',
        location:
          '131 Albert El Awal St.,In Front Of House Of Grace Hospital SEMOUHA, ALEXANDRIA',
        totalOrders: 6542.0,
        totalProducts: 53600.0,
        isFull: false,
      },

      /* 4 */
      {
        _id: '5ff7b9651c1a3e395fc3053b',
        name: 'Giza Warehouse',
        location: '26 Gamaet El Dewal El Arabeya St. MOHANDESEEN, GIZA',
        totalOrders: 6530.0,
        totalProducts: 3604.0,
        isFull: true,
      },

      /* 5 */
      {
        _id: '5ff8bcb2099d06c4318ece11',
        name: 'Sharm Elsheikh Warehouse',
        location:
          '22 El Benouk St.,In Front Of Alf Leila Wa Leila Village UMM EL SID HILL, SHARM EL SHEIKH',
        totalOrders: 56400.0,
        totalProducts: 543000.0,
        isFull: false,
      },

      /* 6 */
      {
        _id: '5ff8bd00099d06c4318ece12',
        name: 'Port Said Warehouse',
        location:
          '61 El Guish St. Off El Gabarty St.,Behind Alex Bank EL SHARK DISTRICT, PORT SAID',
        totalOrders: 6548.0,
        totalProducts: 5430.0,
        isFull: false,
      },

      /* 7 */
      {
        _id: '5ff8bd49099d06c4318ece13',
        name: 'Damietta Warehouse',
        location: '61 Nadia Basal St.,Behind Mostafa Moshrafa school, Damietta',
        totalOrders: 6568.0,
        totalProducts: 4580.0,
        isFull: true,
      },

      /* 8 */
      {
        _id: '5ff8be20099d06c4318ece14',
        name: 'Mansoura Warehouse',
        location: '54th Gihan Sadat Street, Gamaa District, Mansoura',
        totalOrders: 94568.0,
        totalProducts: 36580.0,
        isFull: true,
      },

      /* 9 */
      {
        _id: '5ff8be5f099d06c4318ece15',
        name: 'Fayoum Warehouse',
        location: '54th Portsaid Street, Talaat Harb square, Fayoum',
        totalOrders: 44568.0,
        totalProducts: 36580.0,
        isFull: true,
      },

      /* 10 */
      {
        _id: '5ff8beb7099d06c4318ece16',
        name: 'Assuit Warehouse',
        location: 'El-kilo 14 Assiut Elwadi Road, Asyut 71111 Egypt',
        totalOrders: 4568.0,
        totalProducts: 2660.0,
        isFull: false,
      },

      /* 11 */
      {
        _id: '5ff8bf2d099d06c4318ece17',
        name: 'Luxor Warehouse',
        location: 'El Zinia Gebly Street, Luxor Egypt',
        totalOrders: 32478.0,
        totalProducts: 29660.0,
        isFull: false,
      },
    ];
  }
  getAllWareHouses() {
    return this.warehouses.slice();
  }
  getWarehouseById(id: string) {
    return this.warehouses.filter((w) => {
      return w._id === id;
    });
  }
  addNewWareHouse(
    name: string,
    location: string,
    totalOrders: number,
    totalProducts: number
  ) {
    const newWarehouse: warehouse = {
      name,
      location,
      totalOrders: totalOrders || 0,
      totalProducts: totalProducts || 0,
      isFull: false,
    };
    this.warehouses.push(newWarehouse);
  }

  updateWarehouseByID(
    id: string,
    name?: string,
    location?: string,
    totalOrders?: number,
    totalProducts?: number,
    isFull?: boolean
  ) {
    const index = this.warehouses.findIndex((p) => {
      return p._id === id;
    });
    if (index >= 0) {
      this.warehouses[index].name = name || this.warehouses[index].name;
      this.warehouses[index].location =
        location || this.warehouses[index].location;
      this.warehouses[index].totalOrders =
        totalOrders || this.warehouses[index].totalOrders;
      this.warehouses[index].totalProducts =
        totalProducts || this.warehouses[index].totalProducts;
      this.warehouses[index].isFull = isFull || this.warehouses[index].isFull;
    }
  }

  removeWarehouseByID(id: string) {
    const index = this.warehouses.findIndex((p) => {
      return p._id === id;
    });

    if (index >= 0) {
      this.warehouses.splice(index, 1);
    }
  }
}
