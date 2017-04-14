import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleComponent } from './src/sample.component';
import { SampleDirective } from './src/sample.directive';
import { SamplePipe }      from './src/sample.pipe';
import { WooCartService }  from "./src/cart.service";
import { WooApiService }   from './src/woocommerce.service';

import { CoolStorageModule } from 'angular2-cool-storage';

export * from './src/sample.component';
export * from './src/sample.directive';
export * from './src/sample.pipe';
export * from './src/woocommerce.service';
export * from './src/cart.service';


@NgModule({
  imports: [
    CommonModule,
    CoolStorageModule.forRoot()
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ]
})
export class WooApiModule {
  static forRoot(config: Object): ModuleWithProviders {
    return {
      ngModule: WooApiModule,
      providers: [
        WooApiService,
        {provide: 'config', useValue: config},
        WooCartService
      ]
    };
  }
}
