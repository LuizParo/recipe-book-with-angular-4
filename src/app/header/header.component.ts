import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { Recipe } from './../recipes/recipe.model';

import { AuthService } from './../auth/auth.service';
import { RecipeService } from './../recipes/recipe.service';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css']
})
export class HeaderCompoment {

    constructor(private recipeService: RecipeService, private authService: AuthService) {}

    onSaveData(): void {
        this.recipeService.storeRecipes()
            .subscribe(console.log, console.error);
    }

    onFetchData(): void {
        this.recipeService.getAllRecipes();
    }

    onLogout(): void {
        this.authService.logout();
    }
}