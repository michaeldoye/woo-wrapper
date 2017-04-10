import { Injectable, Inject, OnInit } from '@angular/core';
import * as WooCommerceAPI from 'woocommerce-api';

import { CoolLocalStorage } from 'angular2-cool-storage';


@Injectable()
export class WooApiService implements OnInit {

  woo:any;

  constructor(
    @Inject('config') 
    private config: any, 
    private ls: CoolLocalStorage
  ) { this.woo = WooCommerceAPI(config) }

  ngOnInit(): void {
    
  }

	fetchItems(itemType:string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.woo.getAsync(itemType)
        .then((data:any) => resolve(JSON.parse(data.toJSON().body)))
        .catch((error:Error) => reject(error));
    });
	}

  addToCart(product:any): void {
    let cartArray:any = this.ls.getObject('cart') || [];
    cartArray.push(product);
    this.ls.setObject('cart', cartArray);
  };

  getCart(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.ls.getObject('cart'));
    });
  }

  clearCart(): void {
    this.ls.removeItem('cart');
  }

  createCustomer(user:any): void {};

  updateCustomer(user:any): void {};

  createOrder(items:Array<any>): void {};

  updateOrder(orderId:Number): void {};
}
