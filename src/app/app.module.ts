import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { MenuComponent } from './misc/menu/menu.component';
import { E404Component } from './misc/e404/e404.component';

import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserChangeComponent } from './user/user-change/user-change.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

import { AppInitService } from './app-init.service';
import { BoolDisplayPipe } from './common/bool-display.pipe';
import { SearchPipe } from './user/search.pipe';
import { SortPipe } from './common/sort.pipe';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductChangeComponent } from './product/product-change/product-change.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorChangeComponent } from './vendor/vendor-change/vendor-change.component';

import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestChangeComponent } from './request/request-change/request-change.component';
import { RequestReviewsComponent } from './request/request-reviews/request-reviews.component';

import { RequestlineListComponent } from './requestline/requestline-list/requestline-list.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineChangeComponent } from './requestline/requestline-change/requestline-change.component';

export function startupServiceFactory(AppInit: AppInitService): Function {
  return () => AppInit.getSettings();
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    E404Component,
    UserDetailComponent,
    UserListComponent,
    UserCreateComponent,
    UserChangeComponent,
    UserLoginComponent,
    BoolDisplayPipe,
    SearchPipe,
    SortPipe,
    ProductListComponent,
    ProductDetailComponent,
    ProductChangeComponent,
    ProductCreateComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorChangeComponent,
    RequestListComponent,
    RequestDetailComponent,
    RequestCreateComponent,
    RequestChangeComponent,
    RequestReviewsComponent,
    RequestlineListComponent,
    RequestlineCreateComponent,
    RequestlineChangeComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    AppInitService, {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
