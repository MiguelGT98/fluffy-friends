import { LOCALE_ID, Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthLocalStorageService } from './auth-local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = false;
  endpoint: string = environment.apiUrl;
  redirectUrl: string;

  constructor(
    private http: HttpClient,
    private authLocal: AuthLocalStorageService,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  register(user: Object): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': this.locale,
      }),
    };

    return this.http
      .post(`${this.endpoint}users/register`, user, httpOptions)
      .pipe(retry(3), catchError(this.handleError));
  }

  login(user: Object): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': this.locale,
      }),
    };

    return this.http
      .post(`${this.endpoint}users/login`, user, httpOptions)
      .pipe(retry(3), catchError(this.handleError));
  }

  logOut() {
    this.loggedIn = false;
    this.authLocal.logOut();
  }

  private handleError(error: HttpErrorResponse) {
    // return an observable with a user-facing error message
    return throwError(error);
  }

  isLoggedIn(): boolean {
    return this.authLocal.getCurrentUser() !== null;
  }
}
