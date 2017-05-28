import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    ingredients: Array<Ingredient>;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.ingredients;
        this.subscription = this.shoppingListService
            .ingredientsChanged
            .subscribe(
                (recipes: Array<Ingredient>) => this.ingredients = recipes
            );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}