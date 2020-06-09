import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root',
})
export class AuthLocalStorageService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {}

  public getCurrentUser(): string {
    const user = this.storage.get('user') || null;

    return user;
  }

  public setCurrentUser(token: string): void {
    this.storage.set('user', token);
  }

  public logOut(): void {
    this.storage.set('user', null);
  }
}
