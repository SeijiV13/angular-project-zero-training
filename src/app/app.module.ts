import { LoopComponent } from './example-component/loop/loop.component';
import { UserChildComponent } from './example-component/user-child/user-child.component';
import { UserComponent } from './example-component/user/user.component';
import { ReactiveFormComponent } from './example-component/reactive-form/reactive-form.component';
import { Child2Component } from './example-component/child2/child2.component';
import { Child1Component } from './example-component/child1/child1.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { TemplateDrivenFormComponent } from './example-component/template-driven-form/template-driven-form.component';
import { SortPipe } from './shared/pipes/sort.pipe';
import { SortImpurePipe } from './shared/pipes/sort-impure.pipe';
import { ProductComponent } from './example-component/product/product.component';
import { ProductResolver } from './core/resolvers/product.resolver';
import { HeaderExampleComponent } from './example-component/header-example/header-example.component';
import { ProjectedChildComponent } from './example-component/projected-child/projected-child.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    SortImpurePipe,
    HeaderExampleComponent,
    ProjectedChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [ProductResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
