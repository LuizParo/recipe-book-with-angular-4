import { NgModule } from '@angular/core';

import { HeaderCompoment } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { RecipeService } from './../recipes/recipe.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations : [
        HeaderCompoment,
        HomeComponent
    ],
    imports : [
        AppRoutingModule,
        SharedModule
    ],
    providers : [
        AuthService,
        DataStorageService,
        RecipeService,
        ShoppingListService
    ],
    exports : [
        AppRoutingModule,
        HeaderCompoment
    ]
})
export class CoreModule {

}