import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

import { Ingredient } from './../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
    @ViewChild('nameInput') nameInputReference: ElementRef;
    @ViewChild('amountInput') amountInputReference: ElementRef;
    @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

    onAddItem(): void {
        const newIngrediente: Ingredient = new Ingredient(
            this.nameInputReference.nativeElement.value, 
            this.amountInputReference.nativeElement.value
        );

        this.ingredientAdded.emit(newIngrediente);
    }
}