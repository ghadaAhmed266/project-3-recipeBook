import { Component, Input ,Output,EventEmitter} from '@angular/core';
import { receipe } from '../../receipe.model';
import { ReceipeService } from '../../receipe.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.scss']
})
export class ReceipeItemComponent {
  @Input() receipeItem:receipe;
  OnSelectItem()
  {
    this.receipeService.receipeSelected.emit(this.receipeItem);
  }
  constructor(private receipeService:ReceipeService)
  {}
}
