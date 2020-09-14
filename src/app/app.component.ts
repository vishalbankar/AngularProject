import { Component } from '@angular/core';
import { ProductService} from '../app/product/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public noOfProdAddedToCart:number = 0;
  public title;
  constructor( public prdSrv:ProductService){ }
}
