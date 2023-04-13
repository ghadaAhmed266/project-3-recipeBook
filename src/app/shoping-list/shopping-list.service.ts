import { Subject } from "rxjs";
import { ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientChanged=new Subject<ingredient[]>();
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
        this.ingredientChanged.next(this.ingredients.slice());
      }
      addIngredients(ingredientss:ingredient[])
      {
        this.ingredients.push(...ingredientss);
        this.ingredientChanged.next(this.ingredients.slice());
      }
}