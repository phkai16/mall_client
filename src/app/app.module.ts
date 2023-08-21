import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';
import { Food_DrinkComponent } from './components/food-drink/food_drink.component';
import { HomeComponent } from './components/home/home.component';
import { ShopAPIService } from './services/shopAPI.service';
import { BaseUrlService } from './services/baseUrl.service';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { Enter_learnComponent } from './components/enter_learn/enter_learn.component';
@NgModule({
  declarations: [
    AppComponent, ShopComponent, ProductComponent,
    Food_DrinkComponent,
    HomeComponent,
    ShoppingComponent,
    Enter_learnComponent,
    ProductComponent
  ],
  imports: [BrowserModule, AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ShopAPIService,
    BaseUrlService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
