import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../Services/messages.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(
    public messages: MessagesService
  ) { }

  ngOnInit() {

  }

}
