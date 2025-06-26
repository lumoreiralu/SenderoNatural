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
      'image' : "assets/img/lampara-de-sal.jpeg"
    },
    {
      'name' : "Fuente de Agua",
      'price' : 450000,
      'stock' : 9,
      'image' : "assets/img/fuente.jpeg"
    },
    {
      'name' : "Sahumerio",
      'price' : 7000,
      'stock' : 60,
      'image' : "assets/img/sahumerio.jpeg"
    },
  ]
  constructor() { }

  ngOnInit(): void {
      
  }
}
