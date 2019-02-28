import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelRootComponent } from './Components/panel/panel-root/panel-root.component';
import { PanelHomeComponent } from './Components/panel/panel-home/panel-home.component';
import { PanelUsersComponent } from './Components/panel/panel-users/panel-users.component';
import { SiteRootComponent } from './Components/site/site-root/site-root.component';
import { SiteHomeComponent } from './Components/site/site-home/site-home.component';
import { LoginComponent } from './Components/login/login.component';
import { PanelGuard } from './Guards/panel.guard';

const routes: Routes = [
  // site route group
  {
    path: '',
    component: SiteRootComponent,
    children: [
      { path: '', component: SiteHomeComponent}
    ]
  },
  // painel route group
  {
    path: 'painel',
    canActivate: [PanelGuard],
    component: PanelRootComponent,
    children: [
      { path: '', component: PanelHomeComponent},
      { path: 'users', component: PanelUsersComponent},
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
