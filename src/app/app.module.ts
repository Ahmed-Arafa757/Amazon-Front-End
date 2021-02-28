import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListingComponent } from './product/product-listing/product-listing.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductReviewsComponent } from './product/product-details/product-reviews/product-reviews.component';
import { SliderComponent } from './shared/slider/slider.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { DiscoverAmazonComponent } from './additional/discover-amazon/discover-amazon.component';
import { CustomerServiceComponent } from './additional/customer-service/customer-service.component';
import { CartComponent } from './additional/cart/cart.component';
import { HomeComponent } from './additional/home/home.component';
import { TopSellersComponent } from './additional/top-sellers/top-sellers.component';
import { DepartmentsComponent } from './additional/departments/departments.component';
import { SearchResultsComponent } from './additional/search-results/search-results.component';
import { ErrorNotFoundComponent } from './error/error-not-found/error-not-found.component';
import { CustomAppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReviewsService } from './_services/reviews.service';
import { ProductService } from './_services/product.service';

import { ProductInfoComponent } from './product/product-details/product-info/product-info.component';

import { CheckoutComponent } from './additional/checkout/checkout.component';
import { PaymentMethodsService } from './_services/payment-methods.service';

import { SellerLoginComponent } from './seller/seller-login/seller-login.component';
import { SellerHomeComponent } from './seller/seller-home/seller-home.component';
import { SellerAddComponent } from './seller/seller-add/seller-add.component';
import { SellerRegisterComponent } from './seller/seller-register/seller-register.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaceOrderComponent } from './additional/place-order/place-order.component';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';

//social login
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { UserAccountComponent } from './user/user-account/user-account.component';
import { UserOrdersComponent } from './user/user-account/user-orders/user-orders.component';
import { UserLoginSecurityComponent } from './user/user-account/user-login-security/user-login-security.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ProductListingComponent,
    ProductItemComponent,
    ProductAddComponent,
    ProductDetailsComponent,
    ProductReviewsComponent,
    SliderComponent,
    SideNavComponent,
    DiscoverAmazonComponent,
    CustomerServiceComponent,
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    TopSellersComponent,
    DepartmentsComponent,
    SearchResultsComponent,
    ErrorNotFoundComponent,
    ProductInfoComponent,
    SellerLoginComponent,
    SellerHomeComponent,
    SellerAddComponent,
    SellerRegisterComponent,
    PlaceOrderComponent,
    ResetpasswordComponent,
    UserAccountComponent,
    UserOrdersComponent,
    UserLoginSecurityComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    CustomAppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
  ],
  providers: [
    ReviewsService,
    PaymentMethodsService,
    ProductService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '743289630383-4umh6dlkrkutrllclka0c3gopfjj4jft.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '76756941c5bbe9a9bc952b4264fa41ea'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('762163237736895'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
