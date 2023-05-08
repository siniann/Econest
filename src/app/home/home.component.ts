import { Component, OnInit } from '@angular/core';

import Typed from 'typed.js';
import { allCategories, allProductsList } from '../../api/products';
import { references } from '../../api/references';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() { }
  references = references;
  categories = allCategories;
  products = allProductsList;
  ngOnInit(): void {
    //home
    var options = {
      strings: [
        'waterproof products',
        'termite-proof products',
        'eco friendly products',
        'personalized products',
      ],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
    };
    var typed = new Typed('.typed', options);
    typed.reset(true);
  }
}
