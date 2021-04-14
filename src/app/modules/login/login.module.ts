import { LoginBoxComponent } from './components/login-box/login-box.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    LoginBoxComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
