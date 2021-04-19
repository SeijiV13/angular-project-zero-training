import { BlogComponent } from './blog.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: BlogComponent
   },
];

export const BlogRoutes = RouterModule.forChild(routes);
