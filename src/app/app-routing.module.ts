import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { HistoyComponent } from './histoy/histoy.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'events', component: EventsComponent},
  { path: 'history', component: HistoyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
