import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  set(key, value) {

    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key) {

    return JSON.parse(localStorage.getItem(key));
  }

  public removeItem(key: string): void {
    
    delete localStorage[key];
  }

}
