import { SaveFormGuard } from './core/guards/save-form.guard';
import { LoopComponent } from './example-component/loop/loop.component';
import { UserChildComponent } from './example-component/user-child/user-child.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './example-component/user/user.component';
import { ProductComponent } from './example-component/product/product.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ProductResolver } from './core/resolvers/product.resolver';

const routes: Routes = [


  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: ':id',
        component: UserChildComponent
      }
    ]
  }, {
    path: 'product',
    component: ProductComponent,
    canActivate: [AuthGuard],
    resolve: {
      products: [ProductResolver]
    }
  },
  {
    path: 'loop',
    component: LoopComponent,
    canDeactivate: [SaveFormGuard]
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then((m) => m.BlogModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
