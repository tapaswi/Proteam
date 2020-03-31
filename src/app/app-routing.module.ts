import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewPatientsComponent } from './patients/view/view-patients.component';
import { StateComponent } from './state/state.component';
import { DistrictComponent } from './district/district.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent, children: [
    {path: "patients", component:ViewPatientsComponent},
    {path: "district", component:DistrictComponent},
    {path: "state", component:StateComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
