import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { AuthService } from './../../auth/auth.service';
import { RecipeService } from './../../recipes/recipe.service';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css']
})
export class HeaderCompoment {

    constructor(private recipeService: RecipeService, private _authService: AuthService) {}

    get authService(): AuthService {
        return this._authService;
    }

    onSaveData(): void {
        this.recipeService.storeRecipes()
            .subscribe(console.log, console.error);
    }

    onFetchData(): void {
        this.recipeService.getAllRecipes();
    }

    onLogout(): void {
        this._authService.logout();
    }
}