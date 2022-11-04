import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { MenuComponent } from './misc/menu/menu.component';
import { E404Component } from './misc/e404/e404.component';

import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserChangeComponent } from './user/user-change/user-change.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorChangeComponent } from './vendor/vendor-change/vendor-change.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';

const routes: Routes = [
  {path: "", redirectTo: "/users/login", pathMatch: "full" },

  {path: "users/login", component: UserLoginComponent},
  {path: "users/list", component: UserListComponent},
  {path: "users/detail/:id", component: UserDetailComponent},
  {path: "users/change/:id", component: UserChangeComponent},
  {path: "users/create", component: UserCreateComponent},

  {path: "vendors/list", component: VendorListComponent},
  {path: "vendors/detail/:id", component: VendorDetailComponent},
  {path: "vendors/change/:id", component: VendorChangeComponent},
  {path: "vendors/create", component: VendorCreateComponent},

  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  
  {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
