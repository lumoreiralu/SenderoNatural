import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

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
  constructor() { }

  ngOnInit(): void {
      
  }
  upQuantity(product : Product): void{
    if(product.quantity < product.stock)
      product.quantity++;
  }
  downQuantity(product : Product): void{
    if(product.quantity > 0)
      product.quantity--;
  }
  changeQuantity(event: KeyboardEvent, product : Product): void{
    const inputElement = event.target as HTMLInputElement;
    const value = Number(inputElement.value);
  
    if (!isNaN(value) && value >= 0 && value <= product.stock) {
      product.quantity = value;
    } else if (value > product.stock) {
      product.quantity = product.stock;
    } else {
      product.quantity = 0;
    }
    event.preventDefault()
  }
}
