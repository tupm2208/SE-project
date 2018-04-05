import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  private urlBase = 'https://app-4f8d70b2-24cf-4c7a-b0e0-24be6887ace4.cleverapps.io/api/'
  constructor() { }

  getBaseURL() {

    return this.urlBase;
  }
}
