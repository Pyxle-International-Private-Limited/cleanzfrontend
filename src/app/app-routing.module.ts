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
import { ClientAddComponent } from './clients/add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeAddComponent } from './employees/add/add.component';
import { ServiceAddComponent } from './services/add/add.component';
import { ProviderSubServicesComponent } from './providers/provider-sub-services/provider-sub-services.component';
import { EmployeeRolesComponent } from './employees/employee-roles/employee-roles.component';


const routes: Routes = [
  { path: 'providers/list', component: ListComponent },
  { path: 'providers/add', component: AddComponent },
  { path: 'clients/list', component: ClientListComponent },
  { path: 'clients/client_locations', component: LocationComponent },
  { path: 'employees/list', component: EmployeeListComponent },
  { path: 'services/list', component: ServiceListComponent },
  { path: 'services/sub_services', component: SubServicesComponent },
  { path: 'clients/add', component: ClientAddComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees/add', component: EmployeeAddComponent },
  { path: 'services/add', component: ServiceAddComponent },
  { path: 'providers/sub_services', component: ProviderSubServicesComponent },
  { path: 'employees/employee_roles', component: EmployeeRolesComponent },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
