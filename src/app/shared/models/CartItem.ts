import { foods } from './food';

export class CartItem {
  food: foods;
  quantity: number;

  constructor(food: foods) {
    this.food = food;
    this.quantity = 1;
  }

  get price(): number {
    return this.food.price * this.quantity;
  }
}
