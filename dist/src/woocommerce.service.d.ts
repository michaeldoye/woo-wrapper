import { OnInit } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
export declare class WooApiService implements OnInit {
    private config;
    private ls;
    woo: any;
    cartArray: any;
    constructor(config: any, ls: CoolLocalStorage);
    ngOnInit(): void;
    fetchItems(itemType: string): Promise<any>;
    addToCart(product: any, qty?: Number): Promise<any>;
    getCart(): Promise<any>;
    clearCart(): void;
    createCustomer(user: any): void;
    updateCustomer(user: any): void;
    createOrder(items: Array<any>): void;
    updateOrder(orderId: Number): void;
}
