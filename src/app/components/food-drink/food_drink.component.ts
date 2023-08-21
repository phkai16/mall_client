import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/shop.model';
import { ShopAPIService } from 'src/app/services/shopAPI.service';

@Component({

  templateUrl: './food_drink.component.html',
})
export class Food_DrinkComponent implements OnInit{
  constructor(
    private shopAPIService: ShopAPIService
  ){}
  shops: Shop[];
  
  ngOnInit(): void {
    this.shopAPIService.findByCategoryID(1).then(
      res => {
          this.shops = res as Shop[]; 
          console.log(this.shops);
          
      },
      err => {
          console.log(err);
      }
     );
  }
}