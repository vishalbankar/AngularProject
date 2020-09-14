import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartPrdArr:any[];
  public prodArray:any = [];
  public cartProdList:any = [];
  constructor(private prdCart:ProductService) { }

  ngOnInit() {
    this.prdCart.getProdData();
    if(this.prdCart.productArr.length >0){
      this.prodArray = this.prdCart.productArr;
      this.cartPrdArr=this.prdCart.cartProdArr;
    
     for(let i=0; i < this.prodArray.length;i++){
      for(let j=0; j < this.cartPrdArr.length; j++){
          if(this.prodArray[i].ProdId == this.cartPrdArr[j]){
            this.cartProdList.push(this.prodArray[i]);
          } 
      } 
     }
    console.log(this.cartProdList);  
    }
      
  }

  



}
