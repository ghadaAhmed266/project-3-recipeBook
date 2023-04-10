import {EventEmitter} from "@angular/core"
import { ingredient } from "../shared/ingredient.model";
import { receipe } from "./receipe.model";

export class ReceipeService{
    receipeSelected=new EventEmitter<receipe>();
    private receips:receipe[]=[
        new receipe('testing','desc test','./images/imgBurger.jpg',
        [
          new ingredient("Meat",2),
          new ingredient("Cheese",3)
        ]),
        new receipe('test2','desc test','./images/imgFeries.jpg',
        [
          new ingredient("Egg",2),
          new ingredient("Feries",30)
        ])
      ];
      getReceipe()
      {
        return this.receips.slice();
      }
      
}