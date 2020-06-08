import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './providers/list/list.component';
import { AddComponent } from './providers/add/add.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'providers/list', component: ListComponent },
  { path: 'providers/add', component: AddComponent },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
