import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storageCollection: Storage | null = null;

  constructor(private readonly storage: Storage) {
    storage.create().then(v => this.storageCollection = v);
  }

  public emit(key: string, value: string): void {
    if (typeof value !== 'string') {
      throw new Error(`Types of ${value} must be string`);
    }
    this.storageCollection?.set(key, value);
  }

  public value<T = null>(key: string): Promise<null | T> {
    return this.storageCollection?.get(key) as Promise<null | T>;
  }

  public remove(key: string): void {
    this.storageCollection?.remove(key);
  }
}
