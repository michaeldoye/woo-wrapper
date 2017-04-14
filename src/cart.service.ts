import { Injectable, Inject } from '@angular/core';
import { CoolLocalStorage }   from 'angular2-cool-storage';

import { CartItem } from "./interfaces";


@Injectable()
export class WooCartService {

  cartArray: any;
  cartItem: CartItem;

  constructor(private ls: CoolLocalStorage) { 
    this.cartArray = this.ls.getObject('cart') || [];
  }

  addToCart(product:any, qty?:number, productMeta?:any): Promise<any> {
    return new Promise((resolve, reject) => {

      let isFound: boolean = false;

      this.cartItem = {
        quantity: qty || 1,
        product: product,
        lineTotal: Number(product.price) * (qty || 1),
        ItemMeta: productMeta || {}
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
          this.cartArray.push(this.cartItem);
          try {
            this.ls.setObject('cart', this.cartArray);
            resolve({success: `${product.name} added to cart`});            
          } catch (error) {
            reject({error: error});
          }
        } 
        else {
          reject({error: `There was an error, please try again`});
        }
      }, 300);

    });
  };

  getCart(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.cartArray.length) {
        try {
          resolve(this.ls.getObject('cart'));
        } catch (error) {
          reject({error: error});
        }
      }
      else {
        reject({error: 'Cart is empty'})
      }
    });
  }

  clearCart(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cartArray = [];
      try {
        this.ls.removeItem('cart');
      } catch (error) {
        reject({error: error});
      }
      resolve({response: 'Cart Cleared'});
    });
  }

}