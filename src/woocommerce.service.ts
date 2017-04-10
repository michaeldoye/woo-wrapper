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
  ) { }

  ngOnInit(): void {
    this.woo = WooCommerceAPI(this.config);
  }

	fetchItems(itemType:string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.woo.getAsync(itemType)
        .then((data:any) => resolve(JSON.parse(data.toJSON().body)))
        .catch((error:Error) => reject(error));
    });
	}

  addToCart(product:any): void {
    this.ls.setObject('cart', product);
  };

  getCart(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.ls.getObject('cart'));
    });
  }

  createCustomer(user:any): void {};

  updateCustomer(user:any): void {};

  createOrder(items:Array<any>): void {};

  updateOrder(orderId:Number): void {};
}
