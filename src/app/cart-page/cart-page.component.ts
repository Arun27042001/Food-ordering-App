import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  constructor(private cartService: CartService, private foodService: FoodService) { }

  ngOnInit(): void {
    const foods = this.foodService.getAll();
    this.cartService.addToCart(foods[0]); // Add first food item
    this.cartService.addToCart(foods[1]); // Add second food item
    this.cartService.addToCart(foods[2]); // Add third food item
    this.setCart(); // Set the cart after adding items
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString, 10);
    if (!isNaN(quantity)) {
      this.cartService.changeQuantity(cartItem.food.id, quantity);
      this.setCart();
    }
  }
}
