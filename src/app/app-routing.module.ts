import { Route ,RouterModule} from "@angular/router";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ReceipsComponent } from "./receips/receips.component";
import { ShopingListComponent } from "./shoping-list/shoping-list.component";
import { ReceipeDetailComponent } from "./receips/receipe-detail/receipe-detail.component";
import { ReceipeStartComponent } from "./receips/receipe-start/receipe-start.component";
import { ReceipeEditComponent } from "./receips/receipe-edit/receipe-edit.component";

const appRoutes: Route[] = [
    {path:'',redirectTo:'/receips',pathMatch:'full'},
    {path:'receips',component:ReceipsComponent ,children:[
        {path:'',component:ReceipeStartComponent},
        {path:'new',component:ReceipeEditComponent},
        {path:':id',component:ReceipeDetailComponent},
        {path:':id/edit',component:ReceipeEditComponent}
    ]},
    {path:'shoppingList',component:ShopingListComponent}
];
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}