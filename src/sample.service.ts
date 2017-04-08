import { Injectable, Inject } from '@angular/core';
import * as WooCommerceAPI from 'woocommerce-api';


@Injectable()
export class SampleService {

  woo:any;

  constructor(@Inject('config') private config:any) {
    this.woo = WooCommerceAPI(config);
  }

	Fetch(itemType:string): Promise<any> {
    return new Promise((resolve, reject) => {

      this.woo.getAsync(itemType)
        .then((data:any) => resolve(JSON.parse(data.toJSON().body)))
        .catch((error:Error) => reject(error));
        
    });
	} 
}
