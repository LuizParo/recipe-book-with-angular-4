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

    onAddItem(form: NgForm): void {
        const newIngredient: Ingredient = new Ingredient(form.value.name, form.value.amount);
        this.shoppingListService.addIngredient(newIngredient);
    }
}