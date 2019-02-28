import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { CacheService } from './cache-service.service';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { MessagesService } from './messages.service';
import { IOauthResponse } from '../Interfaces/repository-interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const cache = this.injector.get(CacheService);
    const message = this.injector.get(MessagesService);
    const token: IOauthResponse = cache.get('token');
    const authorized = req.clone({
      setHeaders: {
        Autorization: `${token.token_type} ${token.access_token}`,
        Accept: 'application/json'
      }
    });
    message.loading = true;
    return next.handle(authorized).pipe(
      tap(_ => this.log(`requesting url: ${req.url}`)),
      catchError(this.handleError<any>(`request error uri ${req.url}`))
    );
  }

  /**
   * send to default user interface the messag of
   * what's going on
   * @param message string
   */
  private log(message: string): void {
    console.log(message);
    // this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error({
        error: error,
        result: result
      }); // log to console instead
      const message = this.injector.get(MessagesService);
      message.add(error.error.message);
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      if (error.status === 401) {
        const router = this.injector.get(Router);
        router.navigate(['login']);
      }
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
