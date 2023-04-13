import { Component, OnInit } from '@angular/core';
import { receipe } from './receipe.model';
import { ReceipeService } from './receipe.service';

@Component({
  selector: 'app-receips',
  templateUrl: './receips.component.html',
  styleUrls: ['./receips.component.scss'],
  providers:[ReceipeService]
})
export class ReceipsComponent implements OnInit{
  receipeSelectedNow:receipe;
  constructor()
  {}
  ngOnInit(): void {
  }
}
