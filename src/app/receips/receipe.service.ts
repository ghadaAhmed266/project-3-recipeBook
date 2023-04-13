import {Injectable} from "@angular/core"
import { ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shoping-list/shopping-list.service";
import { receipe } from "./receipe.model";

@Injectable()
export class ReceipeService{
    private receips:receipe[]=[
        new receipe('A Big Fat Burger','what else you need to say?','./assets/imgBurger.jpg',
        [
          new ingredient("Meat",2),
          new ingredient("Cheese",3)
        ]),
        new receipe('Tasty Schnitzel','A Super-tasty Schnitzel - just awesome!','./assets/imgFeries.jpg',
        [
          new ingredient("Egg",2),
          new ingredient("Feries",30)
        ])
      ];
      constructor(private slService:ShoppingListService ){}
      getReceipe()
      {
        return this.receips.slice();
      }
      getReceipeItem(index:number)
      {
        return this.receips.slice()[index];
      }
      onAddIngredientsAtShoppingList(ingredients:ingredient[])
      {
        this.slService.addIngredients(ingredients);
      }
}