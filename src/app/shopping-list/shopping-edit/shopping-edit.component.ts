import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
    @ViewChild("form") form: NgForm;

    private subscription: Subscription;
    private editMode: boolean = false;
    private itemIndex: number;
    private item: Ingredient;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit(): void {
        this.subscription = this.shoppingListService
            .startEditing
            .subscribe((index: number) => {
                this.editMode = true;
                this.itemIndex = index;
                this.item = this.shoppingListService.getIngredient(index);
                this.form.setValue({
                    name: this.item.name,
                    amount: this.item.amount
                });
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onSubmit(): void {
        const newIngredient: Ingredient = new Ingredient(this.form.value.name, this.form.value.amount);

        if(this.editMode) {
            this.shoppingListService.updateIngredient(this.itemIndex, newIngredient);
        } else {
            this.shoppingListService.addIngredient(newIngredient);
        }

        this.clearForm();
    }

    onClear(): void {
        this.clearForm();
    }

    onRemove(): void {
        this.shoppingListService.removeIngredient(this.itemIndex);
        this.clearForm();
    }

    private clearForm(): void {
        this.editMode = false;
        this.form.reset();
    }
}