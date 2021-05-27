import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './page/components/nav/nav.component';


const routes: Routes = [
  {
    path: '', component: NavComponent
  },
  {
    path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  {
    path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
