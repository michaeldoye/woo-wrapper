import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleComponent } from './src/sample.component';
import { SampleDirective } from './src/sample.directive';
import { SamplePipe } from './src/sample.pipe';
import { WooApiService } from './src/woocommerce.service';

export * from './src/sample.component';
export * from './src/sample.directive';
export * from './src/sample.pipe';
export * from './src/woocommerce.service';


@NgModule({
  imports: [
    CommonModule
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
      providers: [WooApiService, {provide: 'config', useValue: config}]
    };
  }
}
