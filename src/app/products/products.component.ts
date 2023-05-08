import { Component, OnInit } from '@angular/core';
import { Product } from '../../api/models';
import { allCategories, allProductsList, allproducts } from 'src/api/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() { }

  //dashboard
  products = allproducts;
  categories = allCategories;
  allProducts = allProductsList;
  ngOnInit() {
    //dashboard
    //Considering all your products are inside variable this.products
    let labEquipments = this.products.filter(
      (product: Product) => product.productGroupId == 3
    );
    let itTools = this.products.filter(
      (product: Product) => product.productGroupId == 4
    );
  }
  getProductsByGroup(productGroupId: number): Product[] {
    return this.products.filter(
      (product: Product) => product.productGroupId == productGroupId
    );
  }
  getProductsByCategory(name: string): Product[] {
    return this.products.filter((product: Product) => product.name == name);
  }
}
