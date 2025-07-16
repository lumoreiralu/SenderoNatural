import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit{
  constructor() { }
@Input()
quantity!: number;
@Input()
max!: number;
@Output ()
quantityChange: EventEmitter<number>  = new EventEmitter<number>();
@Output()
maxReached: EventEmitter<number>  = new EventEmitter<number>();
  ngOnInit(): void{

  }

  upQuantity(): void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else
    this.maxReached.emit(this.max);
  }
  downQuantity(): void{
    if(this.quantity > 0)
      this.quantity--;
      this.quantityChange.emit(this.quantity);
  }
  changeQuantity(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);
  
    if (!isNaN(value)) {
      if (value < 0) {
        this.quantity = 0;
      } else if (value > this.max) {
        this.quantity = this.max;
      } else {
        this.quantity = value;
      }
    }
    this.quantityChange.emit(this.quantity);
  }
}