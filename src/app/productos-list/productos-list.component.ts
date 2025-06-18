import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-list',
  standalone: false,
  templateUrl: './productos-list.component.html',
  styleUrl: './productos-list.component.scss'
})
export class ProductosListComponent implements OnInit {
  productos = [
    {
      "name" : "Lampara de Sal",
      "price" : 30000,
      "stock" : 5,
      "image" : "assets/img/lampara-de-sal.jpeg"
  }, 
  {
    "name" : "Sahumerio",
    "price" : 500,
    "stock" : 50,
    "image" : "assets/img/sahumerio.jpeg"
  },
  {
    "name" : "Fuente de agua",
    "price" : 69000,
    "stock" : 16,
    "image" : "assets/img/fuente.jpeg"
  },

]
  constructor() { }

  ngOnInit(): void {
      
  }
}
