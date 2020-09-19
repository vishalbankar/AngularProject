import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {

  public prodListArr:any[] = [];
  public cartProdArr:any = [];

  constructor(private prdService:ProductService) { 
     this.loaddata();
  }

  ngOnInit() {
    //this.prdService.getProdData();
    //this.prodListArr=this.prdService.productArr;
    this.loaddata(); 
  }

  loaddata(){
   // if(this.prdService.productArr.length>0){
   this.prodListArr=this.prdService.productArr;
   //}

   this.prdService.getProdData().subscribe(data => {
     this.prodListArr = data;
   })

  }
  buyNow() {
    alert("check user is loged in or not")
    /**
     * check first user is loged in or not
     * 
     */
    if(this.prdService.productArr.length>0){
   this.prodListArr=this.prdService.productArr;
   }
    console.log(this.prodListArr);
    

    /**
     * if user is alrteady loged then place the order 
     * else ask to login first
     */

  }

  addToCart(ProdId) {
    console.log(ProdId);    
    this.cartProdArr.push(ProdId)
    this.prdService.productAddedToCart(ProdId);
    /**
     * add selected product to add to cart 
     */ 


  }
}
