import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { AuthUser } from '../../Interfaces/auth-user.interface';
import { CacheService } from '../../Services/cache-service.service';
import { IOauthResponse } from '../../Interfaces/repository-interfaces';
import { MessagesService } from '../../Services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: AuthUser = new AuthUser;
  constructor(
    private login: LoginService,
    private cache: CacheService,
    public messages: MessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cache.delete('token');
  }

  makeLogin() {
    this.messages.messages = [];
    this.login.apiLogin(this.user).subscribe(
      (resp: IOauthResponse) => {
        this.cache.set('token', resp);
        this.router.navigate(['painel']);
      }
    );
  }
}
