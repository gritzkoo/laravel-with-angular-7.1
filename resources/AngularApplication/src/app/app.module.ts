// core
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import 'bootstrap';

// providers
import { HttpAuthInterceptorService } from './Services/http-auth-interceptor.service';

// components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PanelHomeComponent } from './Components/panel/panel-home/panel-home.component';
import { PanelMenuComponent } from './Components/panel/panel-menu/panel-menu.component';
import { PanelRootComponent } from './Components/panel/panel-root/panel-root.component';
import { PanelUsersComponent } from './Components/panel/panel-users/panel-users.component';
import { SiteRootComponent } from './Components/site/site-root/site-root.component';
import { SiteMenuComponent } from './Components/site/site-menu/site-menu.component';
import { SiteHomeComponent } from './Components/site/site-home/site-home.component';
import { LoginComponent } from './Components/login/login.component';
import { PanelGuard } from './Guards/panel.guard';
import { LoadingComponent } from './Components/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelHomeComponent,
    PanelMenuComponent,
    PanelRootComponent,
    PanelUsersComponent,
    SiteRootComponent,
    SiteMenuComponent,
    SiteHomeComponent,
    LoginComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptorService,
      multi: true
    },
    PanelGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
