export class Categories {
  productGroupId: number;
  name: string;
}

export class Product {
  productId: number;
  name: string;
  description: string;
  isTaxable: boolean;
  IsNewProduct: boolean;
  PromotionalProduct: boolean;
  pictures: string;
  productGroupId: number;
}
