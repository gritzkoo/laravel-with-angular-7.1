import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessagesService } from '../../Services/messages.service';
import { ILoaderState } from '../../Interfaces/repository-interfaces';
import { LoaderService } from '../../Services/loader.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnDestroy {
  show = false;
  private subscription: Subscription;
  constructor(private loaderService: LoaderService) { }
  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: ILoaderState) => {
        this.show = state.show;
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
