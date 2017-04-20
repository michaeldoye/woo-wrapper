import { Component } from '@angular/core';

import { WooApiService } from "./woocommerce.service";


@Component({
  selector: 'sample-component',
  template: `<h4 *ngFor="let product of products">{{product.name}}</h4>`
})
export class SampleComponent {

  products: any

  constructor(private woo: WooApiService) {

    this.woo.fetchItems('products')
      .then(data => this.products = data)
      .catch(error => console.log(error)); 

  }

}
