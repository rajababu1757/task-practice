import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { authGuard } from './guard/auth.guard';
import { userAuthGuard } from './guard/user-auth.guard';

const routes: Routes = [
  {path: 'admin', component: AdminComponent, canActivate:[authGuard]},
  {path: 'user', component: UserComponent, canActivate:[userAuthGuard]},
  {path: 'products', children: [
    {path: 'view', component: ViewComponent },
    {path: 'edit', component: EditComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
