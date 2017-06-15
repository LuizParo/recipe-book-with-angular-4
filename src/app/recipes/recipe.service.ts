import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';
import { DataStorageService } from './../shared/data-storage.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private static RECIPE_URL: string = 'https://recipebook-925c1.firebaseio.com/recipes.json';

    private _recipesChanged: Subject<Array<Recipe>> = new Subject<Array<Recipe>>();
    private _recipes: Array<Recipe> = [
        new Recipe(
            'Tasty Schnitzel', 
            'A super-tasty Schnitzel - just awesome', 
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'Big Fat Burger', 
            'What else you need to say?', 
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService, private dataStorageService: DataStorageService) {}
    
    getRecipeById(id: number): Recipe {
        return this._recipes[id];
    }

    get recipes(): Array<Recipe> {
        return this._recipes.slice();
    }

    get recipesChanged(): Subject<Array<Recipe>> {
        return this._recipesChanged;
    }

    addIngredientsToShoppingList(ingrediets: Array<Ingredient>): void {
        this.shoppingListService.addIngredients(ingrediets);
    }

    addRecipe(recipe: Recipe): void {
        this._recipes.push(recipe);
        this._recipesChanged.next(this.recipes);
    }

    updateRecipe(index: number, recipe: Recipe): void {
        this._recipes[index] = recipe;
        this._recipesChanged.next(this.recipes);
    }

    removeRecipe(index: number): void {
        this._recipes.splice(index, 1);
        this._recipesChanged.next(this.recipes);
    }

    storeRecipes(): Observable<Response> {
        return this.dataStorageService.store(RecipeService.RECIPE_URL, this.recipes);
    }

    getAllRecipes(): void {
        this.dataStorageService.fetch(RecipeService.RECIPE_URL)
            .subscribe(
                this.setRecipes.bind(this),
                console.error
            );
    }

    private setRecipes(recipes: Array<any>) {
        this._recipes = recipes
            .map(obj => new Recipe(obj._name, obj._description, obj._imagePath, obj._ingredients));
        this._recipesChanged.next(this.recipes);
    }
}