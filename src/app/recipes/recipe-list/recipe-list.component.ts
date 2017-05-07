import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
    @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

    recipes: Array<Recipe> = [
        new Recipe('A test recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg')
    ];

    onRecipeSelected(recipe: Recipe): void {
        this.recipeWasSelected.emit(recipe);
    }
}