import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }       from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { ExpensiveListComponent }    from './toh/expensive-list.component';
import { ProductsListComponent }  from './toh/products-list.component';
import { TeaDetailComponent }  from './toh/details.component';
import { ShoppingCartComponent }  from './toh/shopping-cart.component';


import { HttpModule, JsonpModule }  from '@angular/http';
// import { InMemoryWebApiModule }     from 'angular2-in-memory-web-api';


//pipes
import {TopPipe} from './toh/top.pipe';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        ExpensiveListComponent,
        ProductsListComponent,
        ShoppingCartComponent,
        TeaDetailComponent,
        TopPipe
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
