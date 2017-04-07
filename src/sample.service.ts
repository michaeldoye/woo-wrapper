import { Injectable } from '@angular/core';
import * as WooCommerceAPI from 'woocommerce-api';


@Injectable()
export class SampleService {

  woo:any;

  constructor() {

    this.woo = WooCommerceAPI({
      url: 'http://woodemo.webseodev4.co.za',
      consumerKey: 'ck_e23da851d1b0f5917403e823565ee2f7099bd778',
      consumerSecret: 'cs_116af19a9badeb60208692275597030e01acec5a',
      wpAPI: true,
      version: 'wc/v1'
    });
    
  }

	Fetch(itemType:string): Promise<any> {
		return this.woo.getAsync(itemType);
	} 
}
