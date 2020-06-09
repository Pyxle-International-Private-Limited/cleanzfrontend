import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './providers/list/list.component';
import { AddComponent } from './providers/add/add.component';
import { ClientLocationComponent } from './clients/client-location/client-location.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeRolesComponent } from './employees/employee-roles/employee-roles.component';
import { ServicesListComponent } from './services/services-list/services-list.component';
import { SubServicesComponent } from './services/sub-services/sub-services.component';
import { ClientAddComponent } from './clients/client-add/client-add.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'providers/list', component: ListComponent },
  { path: 'providers/add', component: AddComponent },
  { path: 'clients/client/list', component: ClientListComponent },
  { path: 'clients/client/location', component: ClientLocationComponent },
  { path: 'employees/employee/list', component: EmployeeListComponent },
  { path: 'employees/employee/roles', component: EmployeeRolesComponent },
  { path: 'services/services/list', component: ServicesListComponent },
  { path: 'services/sub/services', component: SubServicesComponent },
  { path: 'clients/client/add', component: ClientAddComponent },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
