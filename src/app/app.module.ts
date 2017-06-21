import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import 'rxjs/Rx';

import { AppRoutingModule } from './app-routing.module';
import { RecipeModule } from './recipes/recipe.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

import { AppComponent } from './app.component';
import { HeaderCompoment } from './header/header.component';

import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { DataStorageService } from './shared/data-storage.service';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { SharedModule } from './shared/shared.module';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderCompoment,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpModule,
        RecipeModule,
        SharedModule,
        ShoppingListModule
    ],
    providers: [
        AuthGuard,
        AuthService,
        DataStorageService,
        RecipeService,
        ShoppingListService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }