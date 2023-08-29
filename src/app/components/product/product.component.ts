import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductAPIService } from 'src/app/services/productAPI.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({

  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit{
  searchByName: FormGroup;
  options: any[];

  constructor(
    private productAPIService: ProductAPIService,
    private formBuilder: FormBuilder,
  ){}
  products: Product[];
  
  ngOnInit(): void {
    this.productAPIService.findAll().then(
      res => {
          this.products = res as Product[]; 
          console.log(this.products);
          
      },
      err => {
          console.log(err);
      }
     );
     this.searchByName = this.formBuilder.group({
      keyword: ''
    });
    this.options = [
      'Giá tăng dần',
      'Giá giảm dần'
    ]
  }
  search(){
    
    var keyword: string = this.searchByName.value.keyword;
    this.productAPIService.findByName(keyword).then(
      res => {
          this.products = res as Product[]; 
          console.log(this.products);
          
      },
      err => {
          console.log(err);
      }
     );
     if(keyword == ''){
      this.productAPIService.findAll().then(
        res => {
            this.products = res as Product[]; 
            console.log(this.products);
            
        },
        err => {
            console.log(err);
        }
       );
     }
  }
 
  order(evt: any){
    var type:number = evt.target.value;
    if(type == 0){
      this.productAPIService.findAll().then(
        res => {
            this.products = res as Product[]; 
            console.log(this.products);
            
        },
        err => {
            console.log(err);
        }
       );
    } else if(type == 1){
      this.productAPIService.asc().then(
        res => {
            this.products = res as Product[]; 
            console.log(this.products);
            
        },
        err => {
            console.log(err);
        }
       );
    } else if(type == 2){
      this.productAPIService.desc().then(
        res => {
            this.products = res as Product[]; 
            console.log(this.products);
            
        },
        err => {
            console.log(err);
        }
       );
    }
  }
}