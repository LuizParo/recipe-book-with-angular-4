import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from './../../shared/ingredient.model';

import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls : ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    private id: number;
    private editMode: boolean = false;

    recipeForm: FormGroup;
    
    constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) {}

    ngOnInit(): void {
        this.subscription = this.route.params
            .subscribe((params: Params) => {
                this.id = +params['id'];
                this.editMode = params['id'];

                this.initForm();
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onSubmit(): void {
        const recipe: Recipe = new Recipe(
            this.recipeForm.value['name'],
            this.recipeForm.value['description'],
            this.recipeForm.value['imagePath'],
            this.recipeForm.value['ingredients']
        );

        if(this.editMode) {
            this.recipeService.updateRecipe(this.id, recipe);
        } else {
            this.recipeService.addRecipe(recipe);
        }

        this.navigateAwayToRecipes();
    }

    onAddIngredient(): void {
        (<FormArray>this.recipeForm.get('ingredients')).push(
            new FormGroup({
                'name' : new FormControl(null, [Validators.required]),
                'amount' : new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
        );
    }

    onCancel(): void {
        this.navigateAwayToRecipes();
    }

    private initForm(): void {
        let recipeName: string = '';
        let imagePath: string = '';
        let recieDescription: string = '';
        let ingredients: FormArray = new FormArray([]);

        if(this.editMode) {
            const recipe = this.recipeService.getRecipeById(this.id);
            recipeName = recipe.name;
            imagePath = recipe.imagePath;
            recieDescription = recipe.description;

            recipe.ingredients
                .forEach((ingredient: Ingredient) => {
                    ingredients.push(new FormGroup({
                        'name' : new FormControl(ingredient.name, [Validators.required]),
                        'amount' : new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
                    }));
                });
        }

        this.recipeForm = new FormGroup({
            'name' : new FormControl(recipeName, [Validators.required]),
            'imagePath' : new FormControl(imagePath, [Validators.required]),
            'description' : new FormControl(recieDescription, [Validators.required]),
            'ingredients' : ingredients
        });
    }

    private navigateAwayToRecipes(): void {
        this.router.navigate(['../'], {relativeTo : this.route});
    }
}