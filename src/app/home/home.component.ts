import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  foods: foods[]=[];

  constructor(private fs:FoodService,private router:ActivatedRoute){ }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      if(params['searchItem'])
        this.foods =this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
        
      else if( params['tag'])
        this.foods= this.fs.getAllFoodByTag(params['tag'])

      else
      this.foods = this.fs.getAll()
    })


   this.foods = this.fs.getAll(); 
  }


}
