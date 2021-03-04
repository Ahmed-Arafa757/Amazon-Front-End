import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../_model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[];

  cartProducts = [];
  baseUrl = 'https://iti-amzon-backend.herokuapp.com/';
 /* baseUrl = 'http://localhost:3000/'; */
  productAdded = new EventEmitter<Product[]>();

  constructor(private httpClinet: HttpClient) {}
  getAllProducts() {
    return this.httpClinet.get(this.baseUrl + 'api/products');
  }
  productById(id: string) {
    return this.httpClinet.get(this.baseUrl + 'api/product/id/' + id);
  }
  productByName(name: string) {
    return this.httpClinet.get(this.baseUrl + 'api/product/name/' + name);
  }
  updateProduct(product: Product) {
    return this.httpClinet.put(
      this.baseUrl + 'api/product/' + product._id,
      product
    );
  }
  deleteProduct(id: string) {
    return this.httpClinet.delete(this.baseUrl + 'api/product/' + id);
  }
  addProduct(product: Product) {
    console.log(product);

    return this.httpClinet.post(this.baseUrl + 'api/product/add', product);
  }

  addProductsToCart(products) {
    this.cartProducts = products.slice();
    this.productAdded.emit(this.cartProducts);
  }
}
