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
import { ProductAPIService } from './services/productAPI.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DropdownModule  
  ],
  providers: [
    ShopAPIService,
    BaseUrlService,
    ProductAPIService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
