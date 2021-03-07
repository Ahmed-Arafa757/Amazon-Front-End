import { ProductInfo } from './productInfo';
import { ProductPrice } from './productPrice';

export interface Product {
  _id?: string;
  productId?: number;
  productName?: string;
  productInfo?: ProductInfo[];
  productPrice?: ProductPrice;
  productRate?: number;
  productImages?: string[];
  productType?: string;
  productCategory?: string; //CategoryID
  productSubCategory?: string; //Category -> Sub array[]
  keywords?: string[];
  warehouseId?: string; //warehouseId
  productStock?: number;
  productSales?: string; //salesId
}
