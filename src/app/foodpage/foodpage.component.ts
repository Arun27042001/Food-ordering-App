import { Component, OnInit } from '@angular/core';
import { foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class FoodpageComponent implements OnInit {
  food!: foods;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService : CartService,
    private router:Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = this.foodService.getFoodById(params['id']);
      }
    });
  }

  ngOnInit(): void {}

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}

