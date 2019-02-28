import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  constructor() { }
  private storage: Storage = localStorage;
  private prefix: string = btoa('NG_CACHE_');
  private _getKey = (key: string) => {
    return this.prefix + btoa(key);
  };
  /**
   * retrieve in storage data with informed key
   */
  get = (key: string) => {
    let content, result;
    content = atob(this.storage.getItem(this._getKey(key)) || (btoa('')));

    try {
      result = JSON.parse(content);
    } catch (e) {
      result = content;
    }
    return result || false;
  }
  /**
   * set in storage data with key informed
   */
  set = (key: string, content: object | string) => {
    this.storage.setItem(this._getKey(key), btoa(JSON.stringify(content)));
  }
  /**
   * remove from storage the key informed
   */
  delete = (key: string) => {
    this.storage.removeItem(this._getKey(key));
  }
  /**
   * delete all data in storage
   */
  clear = () => {
    this.storage.clear();
  }
  /**
   * chech if there is a key on storage
   * with key informed
   */
  has = (key: string) => {
    return this._getKey(key) in this.storage;
  }
}
