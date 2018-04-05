import { UtilModule } from './util/util.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from './api/api.module';

@NgModule({
  imports: [
    CommonModule,
    UtilModule,
    ApiModule
  ],
  declarations: []
})
export class CoreModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    }
  }
}
