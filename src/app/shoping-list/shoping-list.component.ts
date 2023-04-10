import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit{
ingredients:ingredient[];
constructor(private shoppinglistService:ShoppingListService)
{

}
ngOnInit(): void {
  this.ingredients=this.shoppinglistService.getIngredients();
  this.shoppinglistService.ingredientChanged.subscribe(
    (ingredients:ingredient[])=>{
      this.ingredients=ingredients;
    }
  )
}
}
