import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productArr:any=[];
  public cartProdArr:any = [];
  public cartProdCount:number = 0;
  constructor(private httpServer:HttpClient) { }

  private subject = new Subject<any>();
 
  getProdData(){
   let data = this.httpServer.get('http://localhost:3000/product');
    data.subscribe(res =>{
      this.productArr=res;      
    });
    return this.productArr;
   }

   productAddedToCart(id){
    this.cartProdArr.push(id);
    console.log(this.cartProdArr.length);
    this.cartProdCount = this.cartProdArr.length;
    //this.cartProdArr.length;
   }

  
}
