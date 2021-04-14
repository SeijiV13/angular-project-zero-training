import { ReactiveFormComponent } from './example-component/reactive-form/reactive-form.component';
import { Child2Component } from './example-component/child2/child2.component';
import { Child1Component } from './example-component/child1/child1.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
