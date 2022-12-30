// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { RegisterFormComponent } from './register-form/register-form.component';

import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [

  {path:"registration",component:RegisterFormComponent},

  {path:"login", component:LoginFormComponent},
  {path:"home", component:HomeComponent}

];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }

