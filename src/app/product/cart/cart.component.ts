import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public totalAmount;
  public cartPrdArr:any[];
  public prodArray:any = [];
  public cartProdList:any = [];
  constructor(private prdCart:ProductService) { }

  ngOnInit() {
    this.prdCart.getProdData().subscribe(data => {this.prodArray = data;
    console.log(data);
    if(data.length>0){
      this.loadCartData(data);
    }  
      });

  }

  loadCartData(prodArr){
    this.prodArray = prodArr;
    console.log(this.prodArray);
    
    if(this.prodArray.length >0){
    this.cartPrdArr=this.prdCart.cartProdArr;
     for(let i=0; i < this.prodArray.length;i++){
      for(let j=0; j < this.cartPrdArr.length; j++){
          if(this.prodArray[i].ProdId == this.cartPrdArr[j]){
            this.cartProdList.push(this.prodArray[i]);
            this.totalAmountCal();
          } 
      } 
     }
    }

  }
  totalAmountCal(){
        // this.totalAmount=this.cartProdList.ProductPrice
        this.totalAmount = this.cartProdList.reduce(function(tot=0, arr) { 
        // return the sum with previous value
        console.log(tot + parseInt(arr.ProdPrice));
        return tot = tot + parseInt(arr.ProdPrice);
        // set initial value as 0
      },0);
  }
}
