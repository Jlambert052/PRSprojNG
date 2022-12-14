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

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductChangeComponent } from './product/product-change/product-change.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';

import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestChangeComponent } from './request/request-change/request-change.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestReviewsComponent } from './request/request-reviews/request-reviews.component';

import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineChangeComponent } from './requestline/requestline-change/requestline-change.component';
import { RequestlineListComponent } from './requestline/requestline-list/requestline-list.component';
import { RequestReviewItemComponent } from './request/request-review-item/request-review-item.component';



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

  {path: "products/list", component: ProductListComponent},
  {path: "products/detail/:id", component: ProductDetailComponent},
  {path: "products/change/:id", component:ProductChangeComponent},
  {path: "products/create", component: ProductCreateComponent},

  {path: "requests/list", component: RequestListComponent},
  {path: "requests/detail/:id", component: RequestDetailComponent},
  {path: "requests/change/:id", component: RequestChangeComponent},
  {path: "requests/create", component: RequestCreateComponent},
  {path: "requests/reviews", component: RequestReviewsComponent},
  {path: "requests/reviews/:id", component: RequestReviewItemComponent},

  {path: "requests/lines/:id", component: RequestlineListComponent},
  {path: "requestlines/create/:id", component: RequestlineCreateComponent},
  {path: "requestlines/change/:id", component: RequestlineChangeComponent},

  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  
  {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
