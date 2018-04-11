import { StorageService } from './storage.service';
import { HttpService } from './http.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpResponseService } from './http-response.service';
import { MainApiService } from './main-api.service';
import { ConfigService } from '../config.service';
import { LoadingService } from './loading.service';
import { FormatService } from './format.service';
import { MatchingValidatorDirective } from './matching-validator.directive'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MatchingValidatorDirective],
  providers: [
    HttpResponseService,
    HttpService,
    MainApiService,
    StorageService,
    ConfigService,
    LoadingService,
    FormatService,
  ],
  exports: [
    MatchingValidatorDirective
  ]
})
export class UtilModule { }
