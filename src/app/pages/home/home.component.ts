import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {






  constructor() { }

  ngOnInit(): void {
  }



  title = 'store';

  power = 10;

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camisa.png',
      title: 'Camisa',
      price: 80000,
      description: 'bla bla bla ba'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla ba'
    }
  ];

  addItem(){
    this.products.push();
  }

  deleteItem(index: number){
    this.products.splice(index,1)
  }

  clickProduct(id:number){
    console.log('Product');
    console.log(id);
  }
  
}
