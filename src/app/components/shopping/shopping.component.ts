import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/shop.model';
import { ShopAPIService } from 'src/app/services/shopAPI.service';

@Component({

  templateUrl: './shopping.component.html',
})
export class ShoppingComponent implements OnInit{
  constructor(
    private shopAPIService: ShopAPIService
  ){}
  shops: Shop[];
  
  ngOnInit(): void {
    this.shopAPIService.findByCategoryID(2).then(
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