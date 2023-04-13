import { NumberFormatStyle } from '@angular/common';
import { Component,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit{
  constructor(private shlservice:ShoppingListService){
  }
 
  ngOnInit(): void {
    
  }
   OnAdd(form:NgForm)
  {
    const value=form.value;
    this.shlservice.addIngredient(new ingredient(value.name,+value.amount));
  }
}
