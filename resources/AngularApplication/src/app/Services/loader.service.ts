import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ILoaderState } from '../Interfaces/repository-interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject = new Subject<ILoaderState>();
  loaderState = this.loaderSubject.asObservable();
  constructor() { }
  show() {
    this.loaderSubject.next(<ILoaderState>{ show: true });
  }
  hide() {
    this.loaderSubject.next(<ILoaderState>{ show: false });
  }
}
