import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Array<Ingredient>;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.ingredients;
        this.shoppingListService
            .ingredientsChanged
            .subscribe(
                (recipes: Array<Ingredient>) => this.ingredients = recipes
            );
    }
}