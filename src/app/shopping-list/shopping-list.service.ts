import { Subject } from 'rxjs/Subject';

import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
    private _ingredientsChanged: Subject<Array<Ingredient>> = new Subject<Array<Ingredient>>();
    private _startEditing = new Subject<number>();
    private _ingredients: Array<Ingredient> = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    get ingredientsChanged(): Subject<Array<Ingredient>> {
        return this._ingredientsChanged;
    }

    get ingredients(): Array<Ingredient> {
        return this._ingredients.slice();
    }

    get startEditing(): Subject<number> {
        return this._startEditing;
    }

    addIngredient(ingredient: Ingredient): void {
        this._ingredients.push(ingredient);
        this._ingredientsChanged.next(this.ingredients);
    }

    addIngredients(ingredients: Array<Ingredient>): void {
        this._ingredients.push(...ingredients);
        this._ingredientsChanged.next(this.ingredients);
    }

    getIngredient(index: number): Ingredient {
        return this._ingredients[index];
    }

    updateIngredient(index: number, newIngredient: Ingredient): void {
        this._ingredients[index] = newIngredient;
        this._ingredientsChanged.next(this.ingredients);
    }

    removeIngredient(index: number): void {
        this._ingredients.splice(index, 1);
        this._ingredientsChanged.next(this.ingredients);
    }
}