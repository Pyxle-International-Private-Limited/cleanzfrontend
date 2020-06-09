import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './providers/list/list.component';
import { AddComponent } from './providers/add/add.component';
import { LocationComponent } from './clients/location/location.component';
import { ClientListComponent } from './clients/list/list.component';
import { EmployeeListComponent } from './employees/list/list.component';
import { ServiceListComponent } from './services/list/list.component';
import { SubServicesComponent } from './services/sub-services/sub-services.component';
import { RoleComponent } from './employees/role/role.component';
import { ClientAddComponent } from './clients/add/add.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'providers/list', component: ListComponent },
  { path: 'providers/add', component: AddComponent },
  { path: 'clients/list', component: ClientListComponent },
  { path: 'clients/client_locations', component: LocationComponent },
  { path: 'employees/list', component: EmployeeListComponent },
  { path: 'employees/employee_roles', component: RoleComponent },
  { path: 'services/list', component: ServiceListComponent },
  { path: 'services/sub_services', component: SubServicesComponent },
  { path: 'clients/add', component: ClientAddComponent },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
