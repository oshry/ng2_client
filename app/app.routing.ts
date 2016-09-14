import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent }  from './toh/products-list.component';
import { ExpensiveListComponent }    from './toh/expensive-list.component';
import { ShoppingCartComponent }    from './toh/shopping-cart.component';
import { TeaDetailComponent }    from './toh/details.component';

const appRoutes: Routes = [
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'teas', component: ProductsListComponent },
    { path: '', component: ExpensiveListComponent },
    { path: 'tea/:id', component: TeaDetailComponent }
];
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
