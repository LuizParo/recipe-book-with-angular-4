import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'rxjs/Rx';

import { AppRoutingModule } from './app-routing.module';
import { RecipeModule } from './recipes/recipe.module';

import { AppComponent } from './app.component';
import { HeaderCompoment } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';

import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { DataStorageService } from './shared/data-storage.service';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderCompoment,
        ShoppingListComponent,
        ShoppingEditComponent,
        DropdownDirective,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        RecipeModule
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