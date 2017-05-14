import { ShoppingListService } from './../shopping-list.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from './../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
    @ViewChild('nameInput') nameInputReference: ElementRef;
    @ViewChild('amountInput') amountInputReference: ElementRef;

    constructor(private shoppingListService: ShoppingListService) {}

    onAddItem(): void {
        const newIngredient: Ingredient = new Ingredient(
            this.nameInputReference.nativeElement.value, 
            this.amountInputReference.nativeElement.value
        );

        this.shoppingListService.addIngredient(newIngredient);
    }
}