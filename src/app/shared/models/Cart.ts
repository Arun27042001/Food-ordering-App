import { CartItem } from './CartItem';

export class Cart {
  items: CartItem[] = [];

  get totalPrice(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}
