# woo-wrapper (In development)
Soon-to-be Angular2+ wrapper for the WooCommerce API

Please note this library is not yet pubished or active, it is currently being developed. Visit the [Discord Channel](https://discord.gg/xyUdZKh) if you have an idea or feature request for this project.

[![GitHub version](https://badge.fury.io/gh/michaeldoye%2Fwoo-wrapper.svg)](https://badge.fury.io/gh/michaeldoye%2Fwoo-wrapper)
[![Build Status](https://travis-ci.org/michaeldoye/woo-wrapper.svg?branch=master)](https://travis-ci.org/michaeldoye/woo-wrapper)
[![dependencies Status](https://david-dm.org/michaeldoye/woo-wrapper/status.svg)](https://david-dm.org/michaeldoye/woo-wrapper)
[![GitHub issues](https://img.shields.io/github/issues/michaeldoye/woo-wrapper.svg)](https://github.com/michaeldoye/woo-wrapper/issues)
[![Discord Chat](https://img.shields.io/badge/Discord-Chat-blue.svg)](https://discord.gg/xyUdZKh)

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
import { WooApiModule, WooApiService, WooCartService } from 'woo-wrapper';

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
  // Add the Api service to the provider
  // Add the Cart service if you wish to use it
  providers: [WooApiService, WooCartService]
})
export class AppModule { }
```

Once woo-wrapper is imported, you can use the `WooApiService`:

```typescript
import { Component, OnInit } from '@angular/core';
// Import the services
import { WooApiService, WooCartService } from 'woo-wrapper';


@Component({...})
export class HomePage implements OnInit { 

  products: any;
  // Inject the service
  constructor(private woo: WooApiService, private cart: WooCartService) { }

  ngOnInit(): void {
    // Fetch all products
    this.woo.fetchItems('products')
      .then(products => console.log(products));
  }

  addToCart(product:any): void {
    this.cart.add(product)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

}

```

## Methods


### `fetchItems(itemType)`

- Accepts: `string` (_required_) - the type of WooCommerce item you want to fetch (_products, orders, customers, categories_). Accepts query parameters, see the [WooCommerce Api docs](https://woocommerce.github.io/woocommerce-rest-api-docs) for a full list of query parameters.
- Returns: `Promise`

**Example**

```typescript
this.woo.fetchItems('products')
  .then(products => console.log(products));
```

<hr>

### `add(product, quantity, productMeta)`

- Accepts: `object` (_required_) - your product, in object format.
- Accepts: `number` (_optional_) - the quantity of the product. (_default: `1`_)
- Accepts: `object` (_optional_) - the selected product attributes for variable products (TODO: add format)
- Returns: `Promise`

**Example**

```typescript
this.cart.add(this.product, this.qty, this.meta)
  .then(response => console.log(response))
  .catch(error => /* Error responses sent here - eg: 'Product already in cart' */);
```

<hr>

### `get()`

- Gets current cart contents
- Returns array of cart items _(`[{...},{...},{...}]`)_
- Returns: `Observable`

**Example**

```typescript
this.cart.get()
  .subscribe(data => console.log(data));
```

<hr>

### `clear()`

- Clears the cart Array
- Returns: `Observable`

**Example**

```typescript
this.cart.clear()
  .subscribe(data => console.log(data));
```

<hr>

### `createCustomer(user: Object)`

**Example**

```typescript
this.woo.createCustomer(this.user)
  .then(response => console.log(response));
```

<hr>

### `updateCustomer(user: Object)`

**Example**

```typescript
this.woo.updateCustomer(this.newData)
  .then(response => console.log(response));
```

<hr>

### `createOrder(items: Array<any>)`

**Example**

```typescript
this.woo.createOrder(this.products)
  .then(response => console.log(response));
```

<hr>

### `updateOrder(orderId: Number, newData: Object)`

**Example**

```typescript
this.woo.updateOrder(this.orderId, this.newData)
  .then(response => console.log(response));
```

<hr>

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
