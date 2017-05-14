import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
    private _ingredientsChanged: EventEmitter<Array<Ingredient>> = new EventEmitter<Array<Ingredient>>();
    private _ingredients: Array<Ingredient> = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    get ingredientsChanged(): EventEmitter<Array<Ingredient>> {
        return this._ingredientsChanged;
    }

    get ingredients(): Array<Ingredient> {
        return this._ingredients.slice();
    }

    addIngredient(ingredient: Ingredient): void {
        this._ingredients.push(ingredient);
        this._ingredientsChanged.emit(this.ingredients);
    }

    addIngredients(ingredients: Array<Ingredient>): void {
        this._ingredients.push(...ingredients);
        this._ingredientsChanged.emit(this.ingredients);
    }
}