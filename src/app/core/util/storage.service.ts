import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  set(key, value) {

    sessionStorage.setItem(key, JSON.stringify(value));
  }

  get(key) {

    return JSON.parse(sessionStorage.getItem(key));
  }

  public removeItem(key: string): void {
    
    delete sessionStorage[key];
  }

}
