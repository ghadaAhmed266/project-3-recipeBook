import { Component, OnInit } from '@angular/core';
import { receipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';
@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss']
})
export class ReceipeListComponent implements OnInit{
  test:string="test";
  receips:receipe[];
constructor(private receipeService:ReceipeService){}
ngOnInit(): void {
  this.receips=this.receipeService.getReceipe();
}
}
