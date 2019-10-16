import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { HistoryComponent } from './history/history.component';
import { RegisterComponent } from './user/register/register.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'institutions', component: InstitutionsComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
