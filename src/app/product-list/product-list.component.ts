import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      'name' : "Lampara de Sal",
      'price' : 30000,
      'stock' : 30,
      'image' : "assets/img/lampara-de-sal.jpeg",
      'clearance' : false,
      'quantity' : 0,
    },
    {
      'name' : "Fuente de Agua",
      'price' : 450000,
      'stock' : 9,
      'image' : "assets/img/fuente.jpeg",
      'clearance' : true,
      'quantity' : 0,
    },
    {
      'name' : "Sahumerio",
      'price' : 7000,
      'stock' : 0,
      'image' : "assets/img/sahumerio.jpeg",
      'clearance' : false,
      'quantity' : 0,
    },
  ]

  constructor(private cart : ProductCartService) { 
  }

  ngOnInit(): void {
      
  }
  addToCart(product: Product): void {
    if (product.quantity > 0 && product.quantity <= product.stock) {
      this.cart.addToCart(product);
      product.stock -= product.quantity;
      product.quantity = 0;
    }
  }
  
  maxReached(m: number){
    console.log(m);
  }
  
}
