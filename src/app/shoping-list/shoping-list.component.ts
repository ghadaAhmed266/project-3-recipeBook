import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit,OnDestroy{
ingredients:ingredient[];
private igChangeSub:Subscription;
constructor(private shoppinglistService:ShoppingListService)
{

}
ngOnInit(): void {
  this.ingredients=this.shoppinglistService.getIngredients();
  this.igChangeSub=this.shoppinglistService.ingredientChanged.subscribe(
    (ingredients:ingredient[])=>{
      this.ingredients=ingredients;
    }
  )
}
onEdit(index:number)
{
  
}
ngOnDestroy(): void {
  {
    this.igChangeSub.unsubscribe();
  }
}
}
