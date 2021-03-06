import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';
import { SellerAuthGuardService } from './_services/seller-auth-guard.service';
import { SellerHomeComponent } from './seller/seller-home/seller-home.component';
import { SellerLoginComponent } from './seller/seller-login/seller-login.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './additional/cart/cart.component';
import { CheckoutComponent } from './additional/checkout/checkout.component';
import { CustomerServiceComponent } from './additional/customer-service/customer-service.component';
import { DepartmentsComponent } from './additional/departments/departments.component';
import { DiscoverAmazonComponent } from './additional/discover-amazon/discover-amazon.component';
import { HomeComponent } from './additional/home/home.component';
import { SearchResultsComponent } from './additional/search-results/search-results.component';
import { TopSellersComponent } from './additional/top-sellers/top-sellers.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ErrorNotFoundComponent } from './error/error-not-found/error-not-found.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListingComponent } from './product/product-listing/product-listing.component';
import { SellerAddComponent } from './seller/seller-add/seller-add.component';
import { SellerRegisterComponent } from './seller/seller-register/seller-register.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { PlaceOrderComponent } from './additional/place-order/place-order.component';
import { UserAccountComponent } from './user/user-account/user-account.component';
import { UserOrdersComponent } from './user/user-account/user-orders/user-orders.component';
import { UserLoginSecurityComponent } from './user/user-account/user-login-security/user-login-security.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  {
    path: 'outh/password/:resetToken/:id',
    component: ResetpasswordComponent,
  },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'customer-service',
    component: CustomerServiceComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'discover-amazon', component: DiscoverAmazonComponent },
  { path: 'search-results/:id', component: SearchResultsComponent },
  { path: 'search-results/category/:category', component: SearchResultsComponent },
  { path: 'search-results/sub_category/:sub', component: SearchResultsComponent },
  {
    path: 'search-results',
    redirectTo: 'search-results/',
    pathMatch: 'full',
  },
  { path: 'top-sellers', component: TopSellersComponent },
  // { path: 'product', loadChildren: './product.module' },
  { path: 'product/listing', component: ProductListingComponent },
  {
    path: 'product/add',
    component: ProductAddComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'product/edit/:id',
    component: ProductAddComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'product/details/:id', component: ProductDetailsComponent },
  // Seller
  {
    path: 'seller/add',
    component: SellerAddComponent,
    canActivate: [SellerAuthGuardService],
  },
  {
    path: 'seller/edit/:id',
    component: SellerAddComponent,
    canActivate: [SellerAuthGuardService],
  },
  { path: 'seller/login', component: SellerLoginComponent },
  { path: 'seller/signup', component: SellerRegisterComponent },
  {
    path: 'seller/home',
    component: SellerHomeComponent,
    canActivate: [SellerAuthGuardService],
  },
  // User
  {
    path: 'account',
    component: UserAccountComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'account/orders',
    component: UserOrdersComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'account/login-security',
    component: UserLoginSecurityComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'place-order',
    component: PlaceOrderComponent,
    canActivate: [AuthGuardService],
  },
  { path: '**', component: ErrorNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'top',
    }),
    TranslateModule,
  ],
  exports: [RouterModule, TranslateModule],
})
export class CustomAppRoutingModule {}
