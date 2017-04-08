# woo-wrapper (In development)

## Installation

To install this library, run:

```bash
$ npm install woo-wrapper --save (not yet published)
```

## Using woo-wrapper

Import woo-wrapper in any Angular application by running:

```bash
$ npm install woo-wrapper (not yet published)
```

and then from your Angular `AppModule`:

```typescript
...
// Import woo-wrapper
import { WooApiModule, WooCommerceService } from 'woo-wrapper';

@NgModule({
  declarations: [...],
  imports: [
    ...
    // Specify woo-wrapper as an import
    WooApiModule
  ],
  // Add the service as a provider
  providers: [WooCommerceService]
})
export class AppModule { }
```

Once woo-wrapper is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use woo-wrapper component in app.component.html -->
<h1>
  {{title}}
</h1>
<sampleComponent></sampleComponent>
```

## Methods

All methods return `promises`

### `Fetch(ItemType: string)`

**Example**

```typescript
this.woo.Fetch('products')
  .then(products => console.log(products));
```

### `AddToCart(product: any)`

**Example**

```typescript
this.woo.AddToCart(this.product)
  .then(response => console.log(response));
```

### `CreateCustomer(user: Object)`

**Example**

```typescript
this.woo.CreateCustomer(this.user)
  .then(response => console.log(response));
```

### `UpdateCustomer(user: Object)`

**Example**

```typescript
this.woo.UpdateCustomer(this.newData)
  .then(response => console.log(response));
```

### `CreateOrder(items: Array<any>)`

**Example**

```typescript
this.woo.CreateOrder(this.products)
  .then(response => console.log(response));
```

### `UpdateOrder(orderId: Number, newData: Object)`

**Example**

```typescript
this.woo.UpdateOrder(this.orderId, this.newData)
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

MIT © [Michael Doye](mailto:michaeldoye@gmail.com)
