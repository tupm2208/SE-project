import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  private urlBase = 'https://fast-springs-91413.herokuapp.com/api/'
  constructor() { }

  getBaseURL() {

    return this.urlBase;
  }
}
