import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    private id: number;
    recipe: Recipe;

    constructor(private recipeService: RecipeService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit(): void {
        this.route.params
            .subscribe((params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipeService.getRecipeById(this.id);
            });
    }

    onAddToShoppingList(): void {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }

    onEdit(): void {
        this.router.navigate(['form'], {relativeTo : this.route});
    }

    onRemove(): void {
        this.recipeService.removeRecipe(this.id);
        this.router.navigate(['recipes']);
    }
}