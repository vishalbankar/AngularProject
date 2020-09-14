import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  public purchaseArr:any[]; 
  
  constructor(private purPrdSrv:ProductService) { }

  ngOnInit() {
    this.purPrdSrv.getProdData();
    if(this.purPrdSrv.productArr.length>0){
      this.purchaseArr=this.purPrdSrv.productArr;
    }
  }

}
