import { NumberFormatStyle } from '@angular/common';
import { Component,ViewChild ,ElementRef,OnInit} from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit{
  @ViewChild('name') nameVal:ElementRef;
  @ViewChild('amount') amountVal:ElementRef;
  constructor(private shlservice:ShoppingListService){
  }
 
  ngOnInit(): void {
    
  }
   OnAdd()
  {
    const na=this.nameVal.nativeElement.value;
    const am=this.amountVal.nativeElement.value;
    this.shlservice.addIngredient(new ingredient(na,am));
  }
}
