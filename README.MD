# woo-wrapper (In development)
Soon-to-be Angular2+ wrapper for the WooCommerce API

Please note this library is not yet pubished or active, it is currently being developed. Add an issue if you have an idea or feature request.

[![GitHub version](https://badge.fury.io/gh/michaeldoye%2Fwoo-wrapper.svg)](https://badge.fury.io/gh/michaeldoye%2Fwoo-wrapper)
[![dependencies Status](https://david-dm.org/michaeldoye/woo-wrapper/status.svg)](https://david-dm.org/michaeldoye/woo-wrapper)
[![GitHub issues](https://img.shields.io/github/issues/michaeldoye/woo-wrapper.svg)](https://github.com/michaeldoye/woo-wrapper/issues)
[![Build Status](https://travis-ci.org/michaeldoye/woo-wrapper.svg?branch=master)](https://travis-ci.org/michaeldoye/woo-wrapper)

## Installation

To install this library, run:

```bash
$ npm install woo-wrapper --save (not yet published)
```

## Usage

Import woo-wrapper in any Angular application by running:

```bash
$ npm install woo-wrapper (not yet published)
```

and then from your Angular `AppModule`:

```typescript
...
// Import woo-wrapper
import { WooApiModule, WooApiService } from 'woo-wrapper';

// Add your WooCommerce Credentials
const WooCommerceConfig = {
  url: 'your_site_url',
  consumerKey: 'ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  consumerSecret: 'cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  wpAPI: true,
  version: 'wc/v1'
};

@NgModule({
  declarations: [...],
  imports: [
    ...
    // Specify woo-wrapper as an import and pass in your config
    WooApiModule.forRoot(WooCommerceConfig)
  ],
  // Add the service as a provider
  providers: [WooApiService]
})
export class AppModule { }
```

Once woo-wrapper is imported, you can use the `WooApiService`:

```typescript
import { Component, OnInit } from '@angular/core';
// Import the service
import { WooApiService } from 'woo-wrapper';


@Component({...})
export class HomePage implements OnInit { 

  products: any;
  // Inject the service
  constructor(private woo: WooApiService) { }

  ngOnInit(): void {
    // Fetch all products
    this.woo.fetchItems('products')
      .then(products => console.log(products));
  }

}

```

## Methods

All methods return `promises`

### `fetchItems(itemType: string)`

**Example**

```typescript
this.woo.fetchItems('products')
  .then(products => console.log(products));
```

### `addToCart(product: any)`

**Example**

```typescript
this.woo.addToCart(this.product)
  .then(response => console.log(response));
```

### `createCustomer(user: Object)`

**Example**

```typescript
this.woo.createCustomer(this.user)
  .then(response => console.log(response));
```

### `updateCustomer(user: Object)`

**Example**

```typescript
this.woo.updateCustomer(this.newData)
  .then(response => console.log(response));
```

### `createOrder(items: Array<any>)`

**Example**

```typescript
this.woo.createOrder(this.products)
  .then(response => console.log(response));
```

### `updateOrder(orderId: Number, newData: Object)`

**Example**

```typescript
this.woo.updateOrder(this.orderId, this.newData)
  .then(response => console.log(response));
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Michael Doye](mailto:michaeldoye[@]gmail.com)
