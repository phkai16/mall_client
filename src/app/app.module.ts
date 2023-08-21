import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';
import { Food_DrinkComponent } from './components/food-drink/food_drink.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent, ShopComponent, ProductComponent,
    Food_DrinkComponent,
    HomeComponent,
    ShopComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
