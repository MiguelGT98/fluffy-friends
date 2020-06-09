import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthLocalStorageService } from './auth-local-storage.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = false;
  endpoint: string = environment.apiUrl;
  redirectUrl: string;

  constructor(
    private http: HttpClient,
    private authLocal: AuthLocalStorageService
  ) {}

  register(user: Object): Observable<any> {
    return this.http
      .post(`${this.endpoint}users/register`, user, httpOptions)
      .pipe(retry(3), catchError(this.handleError));
  }

  login(user: Object): Observable<any> {
    return this.http
      .post(`${this.endpoint}users/login`, user, httpOptions)
      .pipe(retry(3), catchError(this.handleError));
  }

  logOut() {
    this.loggedIn = false;
    this.authLocal.logOut();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  isLoggedIn(): boolean {
    return this.authLocal.getCurrentUser() !== null;
  }
}
