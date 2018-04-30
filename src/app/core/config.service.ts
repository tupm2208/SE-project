import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  private urlBase = 'https://app-4a5dbc4f-d024-436d-a4c4-74ab131c9fa3.cleverapps.io/api/'
  constructor() { }

  getBaseURL() {

    return this.urlBase;
  }
}
