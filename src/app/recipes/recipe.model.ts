import { Ingredient } from './../shared/ingredient.model';

export class Recipe {
    private _name: string;
    private _description: string;
    private _imagePath: string;
    private _ingredients: Array<Ingredient> = [];

    constructor(name: string, description: string, imagePath: string, ingredients: Array<Ingredient>) {
        this._name = name;
        this._description = description;
        this._imagePath = imagePath;
        this._ingredients = ingredients;
    }

    public get name(): string {
        return this._name;
    }

    public get description(): string {
        return this._description;
    }

    public get imagePath(): string {
        return this._imagePath;
    }

    public get ingredients(): Array<Ingredient> {
        return this._ingredients.slice();
    }
}