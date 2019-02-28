import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public messages: string[] = [];
  public loading = false;
  constructor() { }
  public add = (str: string): void => {
    this.messages.push(str);
  }
  public clear = (): void => {
    this.messages = [];
  }
}
