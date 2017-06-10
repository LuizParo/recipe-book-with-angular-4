import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    recipes: Array<Recipe>;

    constructor(private recipeService: RecipeService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit(): void {
        this.recipes = this.recipeService.recipes;
        this.subscription = this.recipeService
            .recipesChanged
            .subscribe((recipes: Array<Recipe>) => this.recipes = recipes);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onNewRecipe(): void {
        this.router.navigate(['new'], {relativeTo : this.route});
    }
}