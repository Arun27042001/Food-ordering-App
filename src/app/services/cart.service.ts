import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  getCart(): Cart {
    return this.cart;
  }

  addToCart(food: foods): void {
    const cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cart.items.push(new CartItem(food));
    }
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
  }

  changeQuantity(foodId: number, quantity: number): void {
    const cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (cartItem) {
      cartItem.quantity = quantity;
    }
  }
}
