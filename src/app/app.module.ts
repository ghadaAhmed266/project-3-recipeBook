import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceipsComponent } from './receips/receips.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShoppingEditComponent } from './shoping-list/shopping-edit/shopping-edit.component';
import { ReceipeListComponent } from './receips/receipe-list/receipe-list.component';
import { ReceipeItemComponent } from './receips/receipe-list/receipe-item/receipe-item.component';
import { ReceipeDetailComponent } from './receips/receipe-detail/receipe-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DropdownDirective } from './shared/dropdown.directive';
import { ReceipeStartComponent } from './receips/receipe-start/receipe-start.component';
import { ShoppingListService } from './shoping-list/shopping-list.service';
import { ReceipeEditComponent } from './receips/receipe-edit/receipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipsComponent,
    ShopingListComponent,
    ShoppingEditComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    ReceipeDetailComponent,DropdownDirective, ReceipeStartComponent, ReceipeEditComponent
  ],
  imports: [
    BrowserModule,   
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
