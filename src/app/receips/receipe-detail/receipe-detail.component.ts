import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute ,Params} from '@angular/router';
import { receipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.scss']
})
export class ReceipeDetailComponent implements OnInit{
  receipe:receipe;
  id:number;
  constructor(private recService:ReceipeService,private route:ActivatedRoute){}
ngOnInit(): void {
  this.route.params.subscribe(
    (params:Params)=>{
      this.id=+params['id'];
      this.receipe=this.recService.getReceipeItem(this.id);
    }
  )
}
  onToShoppingList()
  {
    this.recService.onAddIngredientsAtShoppingList(this.receipe.ingredients);
  }
}
