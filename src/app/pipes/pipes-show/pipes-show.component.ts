import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-pipes-show',
  templateUrl: './pipes-show.component.html',
  styleUrls: ['./pipes-show.component.css']
})
export class PipesShowComponent implements OnInit {

  products : Product[] = [
    new Product('Shoe', 'Clothing', 'Royal looking brown shoes', 200.5),
    new Product('Belt', 'Accessory', 'A classy black leather belt with box pattern', 50.5),
    new Product('Play Station', 'Electronic', 'Never feel boring in the lockdown again', 570.50)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
