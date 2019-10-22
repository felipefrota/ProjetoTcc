import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { HistoryComponent } from './history/history.component';
import { RegisterComponent } from './user/register/register.component';
import { RegistryResponsibleComponent } from './user/registry-responsible/registry-responsible.component';
import { RegistrationAddressComponent } from './user/registration-address/registration-address.component';
import { InstitutionRegistrationComponent } from './user/institution-registration/institution-registration.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'institutions', component: InstitutionsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'registry-responsible', component: RegistryResponsibleComponent},
  { path: 'registration-address', component: RegistrationAddressComponent},
  { path: 'institution-registration', component: InstitutionRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
