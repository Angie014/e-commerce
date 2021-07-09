import { Component, Input, Output, EventEmitter,SimpleChanges, OnChanges, OnInit } from '@angular/core';

import {Product} from '../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnChanges, OnInit {

  @Input() product: Product;
  @Output() productCliked: EventEmitter<any> = new EventEmitter();

  constructor(){
    console.log('1. constructor');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('2. ngOnchages');
    console.log(changes);
  }

  ngOnInit(){
    console.log('3. ngOnInit')
  }

 addCart(){
    console.log('Añadir al carrito');
    this.productCliked.emit(this.product.id);
  }

}

