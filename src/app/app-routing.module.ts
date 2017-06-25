import { NgModule } from '@angular/core';
import { Routes, PreloadAllModules, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [{
    path : '',
    component : HomeComponent
}, {
    path : 'recipes',
    loadChildren : './recipes/recipe.module#RecipeModule'
}];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes, {preloadingStrategy : PreloadAllModules})],
    exports : [RouterModule]
})
export class AppRoutingModule {

}