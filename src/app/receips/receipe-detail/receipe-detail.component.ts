import { Component,Input } from '@angular/core';
import { receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.scss']
})
export class ReceipeDetailComponent {
@Input() receipe:receipe;
}
