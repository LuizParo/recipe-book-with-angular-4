import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';

@Injectable()
export class RecipeService {
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

    constructor(private shoppingListService: ShoppingListService) {}
    
    getRecipeById(id: number): Recipe {
        return this._recipes[id];
    }

    get recipes(): Array<Recipe> {
        return this._recipes.slice();
    }

    addIngredientsToShoppingList(ingrediets: Array<Ingredient>): void {
        this.shoppingListService.addIngredients(ingrediets);
    }
}