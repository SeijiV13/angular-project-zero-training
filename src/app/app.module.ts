import { LoopComponent } from './example-component/loop/loop.component';
import { UserChildComponent } from './example-component/user-child/user-child.component';
import { UserComponent } from './example-component/user/user.component';
import { ReactiveFormComponent } from './example-component/reactive-form/reactive-form.component';
import { Child2Component } from './example-component/child2/child2.component';
import { Child1Component } from './example-component/child1/child1.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { TemplateDrivenFormComponent } from './example-component/template-driven-form/template-driven-form.component';
import { SortPipe } from './shared/pipes/sort.pipe';
import { SortImpurePipe } from './shared/pipes/sort-impure.pipe';
import { ProductComponent } from './example-component/product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,

    //Component Loaded
    ProductComponent,
    UserComponent,
    UserChildComponent,
    //Loop component to show For Loop
    LoopComponent,
    //Pipes
    SortPipe,
    SortImpurePipe
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
