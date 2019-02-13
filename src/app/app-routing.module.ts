import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public/public.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'public', component: PublicComponent },
  { path: 'admin', component: AdminComponent, children: [
    { path: 'users', component: UsersComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
