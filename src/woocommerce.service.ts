import { Injectable, Inject, OnInit } from '@angular/core';
import * as WooCommerceAPI from 'woocommerce-api';
import { CoolLocalStorage } from 'angular2-cool-storage';


@Injectable()
export class WooApiService implements OnInit {

  woo: any;
  cartArray: any;

  constructor(
    @Inject('config') 
    private config: any, 
    private ls: CoolLocalStorage
  ) { 
      this.woo = WooCommerceAPI(config);
      this.cartArray = this.ls.getObject('cart') || [];
   }

  ngOnInit(): void {}

  fetchItems(itemType:string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.woo.getAsync(itemType)
        .then((data:any) => resolve(JSON.parse(data.toJSON().body)))
        .catch((error:Error) => reject(error));
    });
  }

  addToCart(product:any, qty?:Number): Promise<any> {
    return new Promise((resolve, reject) => {

      let isFound: boolean = false;

      let cartItem: Object = {
        quantity: qty ? qty : 1,
        product: product
      }

      if (this.cartArray.length >= 1) {
        this.cartArray.forEach((element:any) => {
          if (element.product.id === product.id ) {
            isFound = true;
            reject({error: `${product.name} already in Cart`});
            return;
          }
        });
      }

      setTimeout(() => {
        if (!isFound) {
          this.cartArray.push(cartItem);
          this.ls.setObject('cart', this.cartArray);
          resolve({success: `${product.name} added to cart`});
        } 
        else {
          reject({error: `There was an error, please try again`});
        }
      }, 300);

    });
  };

  getCart(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.ls.getObject('cart'));
    });
  }

  clearCart(): void {
    this.ls.removeItem('cart');
    this.cartArray = [];
  }

  createCustomer(user:any): void {};

  updateCustomer(user:any): void {};

  createOrder(items:Array<any>): void {};

  updateOrder(orderId:Number): void {};
}
