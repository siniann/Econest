import { Product, Categories } from './models';

export const allproducts: Product[] = [
  {
    productId: 1,
    name: 'Stuart UC152 Magnetic Stirrer',
    description: 'Stuart UC152 Magnetic Stirrer, max. capacity 15L, Ceramic',
    isTaxable: true,
    PromotionalProduct: true,
    IsNewProduct: true,
    pictures:
      'https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg',
    productGroupId: 1,
  },
  {
    productId: 2,
    name: 'Dell SE2419HR 24" ',
    description:
      'Dell SE2419HR 24" Full HD IPS Monitor (HDMI, VGA, 3 Yrs Wrty)',
    isTaxable: true,
    PromotionalProduct: true,
    IsNewProduct: true,
    pictures: 'https://picsum.photos/200/300',
    productGroupId: 4,
  },
  {
    productId: 3,
    name: 'Dell PowerEdge T140',
    description: 'Dell PowerEdge T140 Tower Server ',
    isTaxable: true,
    PromotionalProduct: true,
    IsNewProduct: true,
    pictures: 'https://picsum.photos/200/300',
    productGroupId: 4,
  },
  {
    productId: 4,
    name: 'Lab Binocular Compound Microscope ',
    description:
      'AmScope 40X-2500X LED Lab Binocular Compound Microscope with 3D-Stage',
    PromotionalProduct: true,
    IsNewProduct: true,
    isTaxable: true,
    pictures: 'https://picsum.photos/200/300',
    productGroupId: 2,
  },
  {
    productId: 5,
    name: 'Lab Binocular Compound Microscope ',
    description:
      'AmScope 40X-2500X LED Lab Binocular Compound Microscope with 3D-Stage',
    isTaxable: true,
    pictures: 'https://picsum.photos/200/300',
    PromotionalProduct: true,
    IsNewProduct: true,
    productGroupId: 3,
  },
  {
    productId: 6,
    name: 'Lab Binocular Compound Microscope ',
    description:
      'AmScope 40X-2500X LED Lab Binocular Compound Microscope with 3D-Stage',
    isTaxable: true,
    PromotionalProduct: true,
    IsNewProduct: true,
    pictures: 'https://picsum.photos/200/300',
    productGroupId: 3,
  },
  {
    productId: 7,
    name: 'Lab Binocular Compound Microscope ',
    description:
      'AmScope 40X-2500X LED Lab Binocular Compound Microscope with 3D-Stage',
    isTaxable: true,
    pictures: 'https://picsum.photos/200/300',
    PromotionalProduct: true,
    IsNewProduct: true,
    productGroupId: 1,
  },
  {
    productId: 8,
    name: 'Lab Binocular Compound Microscope ',
    description:
      'AmScope 40X-2500X LED Lab Binocular Compound Microscope with 3D-Stage',
    isTaxable: true,
    pictures: 'https://picsum.photos/200/300',
    PromotionalProduct: true,
    IsNewProduct: true,
    productGroupId: 3,
  },
];

export const allCategories: Categories[] = [
  { productGroupId: 0, name: 'All' },
  { productGroupId: 1, name: 'Doors' },
  { productGroupId: 2, name: 'Frames' },
  { productGroupId: 3, name: 'Panel' },
  { productGroupId: 4, name: 'Sheet' },
  { productGroupId: 6, name: 'Planter Box' },
];
export const allProductsList: any = {
  doors: [
    {
      productId: 1,
      name: 'Stuart UC152 Magnetic Stirrer',
      description: 'Stuart UC152 Magnetic Stirrer, max. capacity 15L, Ceramic',
      isTaxable: true,
      PromotionalProduct: true,
      IsNewProduct: true,
      pictures:
        'https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg',
      productGroupId: 1,
    },
    {
      productId: 2,
      name: 'Dell SE2419HR 24" ',
      description:
        'Dell SE2419HR 24" Full HD IPS Monitor (HDMI, VGA, 3 Yrs Wrty)',
      isTaxable: true,
      PromotionalProduct: true,
      IsNewProduct: true,
      pictures: 'https://picsum.photos/200/300',
      productGroupId: 1,
    },
    {
      productId: 3,
      name: 'Dell PowerEdge ',
      description:
        'Dell PowerEdge T140 (E-2124, 8GB, 1TB, H330 Raid Controller)',
      isTaxable: true,
      PromotionalProduct: true,
      IsNewProduct: true,
      pictures: 'https://picsum.photos/200/300',
      productGroupId: 1,
    },
    {
      productId: 4,
      name: 'test4 ',
      description:
        'AmScope 40X-2500X LED Lab Binocular Compound Microscope with 3D-Stage',
      PromotionalProduct: true,
      IsNewProduct: true,
      isTaxable: true,
      pictures: 'https://picsum.photos/200/300',
      productGroupId: 2,
    },
    {
      productId: 5,
      name: 'test5 ',
      description:
        'AmScope 40X-2500X LED Lab Binocular Compound Microscope with 3D-Stage',
      isTaxable: true,
      pictures: 'https://picsum.photos/200/300',
      PromotionalProduct: true,
      IsNewProduct: true,
      productGroupId: 2,
    },
  ],
  windows: [
    {
      productId: 4,
      name: 'Window1',
      description:
        'AmScope 40X-2500X LED Lab Binocular Compound Microscope with 3D-Stage',
      PromotionalProduct: true,
      IsNewProduct: true,
      isTaxable: true,
      pictures: 'https://picsum.photos/200/300',
      productGroupId: 2,
    },
    {
      productId: 5,
      name: 'window 2 ',
      description:
        'AmScope 40X-2500X LED Lab Binocular Compound Microscope with 3D-Stage',
      isTaxable: true,
      pictures: 'https://picsum.photos/200/300',
      PromotionalProduct: true,
      IsNewProduct: true,
      productGroupId: 2,
    },
  ],
  outdoor: [
    {
      productId: 7,
      name: 'Lab Binocular Compound Microscope ',
      description:
        'AmScope 40X-2500X LED Lab Binocular Compound Microscope with 3D-Stage',
      isTaxable: true,
      pictures: 'https://picsum.photos/200/300',
      PromotionalProduct: true,
      IsNewProduct: true,
      productGroupId: 3,
    },
    {
      productId: 8,
      name: 'Lab Binocular Compound Microscope ',
      description:
        'AmScope 40X-2500X LED Lab Binocular Compound Microscope with 3D-Stage',
      isTaxable: true,
      pictures: 'https://picsum.photos/200/300',
      PromotionalProduct: true,
      IsNewProduct: true,
      productGroupId: 5,
    },
  ],
  title: 'Products',
};
