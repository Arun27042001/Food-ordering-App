import { Injectable } from '@angular/core';
import { foods } from '../../shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
 

  constructor() { }

  getFoodById(id:number):foods{
    return this.getAll().find(food=> food.id==id) !;

  }

  getAllFoodByTag(tag:string):foods[]{
    if(tag == 'all')
      return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAll ():foods[]{
    return[
      {
        id:1,
        name:"Hamburger",
        cookTime:'15-20',
        price:10.99,
        favorite: false,
        origins: ['Australia'],
        star: 4.5,
        imageUrl: '/assets/Food1.jpg',
      },

      {
        id:2,
        name:"Burger",
        cookTime:'10-20',
        price:10.99,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/Food2.jpg',
      },

      {
        id:3,
        name:"pizaa",
        cookTime:'5-20',
        price:10.99,
        favorite: false,
        origins: ['Span'],
        star: 4.5,
        imageUrl: '/assets/Food3.jpg',
      }
    ];
  }
}
