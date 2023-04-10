import { EventEmitter } from "@angular/core";
import { ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientChanged=new EventEmitter<ingredient[]>();
    private ingredients:ingredient[]=[
        new ingredient("apple",5),new ingredient("strawbery",100)
      ];
      getIngredients()
      {
        return this.ingredients.slice();
      }
      addIngredient(ingredien:ingredient)
      {
        this.ingredients.push(ingredien);
        this.ingredientChanged.emit(this.ingredients.slice());
      }
}