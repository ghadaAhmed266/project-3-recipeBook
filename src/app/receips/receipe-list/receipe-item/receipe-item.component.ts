import { Component, Input ,Output,EventEmitter} from '@angular/core';
import { receipe } from '../../receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.scss']
})
export class ReceipeItemComponent {
  @Input() receipeItem:receipe;
  @Input() index:number;
}
