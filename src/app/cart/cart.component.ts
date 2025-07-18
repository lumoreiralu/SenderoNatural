import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cartList$: Observable<Product[]>;
  
  constructor(private cart: ProductCartService){
    this.cartList$ = this.cart.cartList.asObservable();
    
  }
  ngOnInit(): void {
  }

}


