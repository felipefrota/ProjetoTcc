import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { HistoryComponent } from './history/history.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { InstitutionComponent } from './institutions/institution/institution.component';
import { InstitutionsService } from './institutions/institutions.service';
import { InputValidationComponent } from './shared/input-validation/input-validation.component';
import { RegistryResponsibleComponent } from './user/registry-responsible/registry-responsible.component';
import { InstitutionRegistrationComponent } from './user/institution-registration/institution-registration.component';
import { RegistrationAddressComponent } from './user/registration-address/registration-address.component';
import { WorkComponent } from './user/work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    InstitutionsComponent,
    HistoryComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    InstitutionComponent,
    InputValidationComponent,
    RegistryResponsibleComponent,
    InstitutionRegistrationComponent,
    RegistrationAddressComponent,
    WorkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [InstitutionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
