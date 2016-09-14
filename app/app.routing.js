"use strict";
var router_1 = require('@angular/router');
var products_list_component_1 = require('./toh/products-list.component');
var expensive_list_component_1 = require('./toh/expensive-list.component');
var shopping_cart_component_1 = require('./toh/shopping-cart.component');
var details_component_1 = require('./toh/details.component');
var appRoutes = [
    { path: 'shopping-cart', component: shopping_cart_component_1.ShoppingCartComponent },
    { path: 'teas', component: products_list_component_1.ProductsListComponent },
    { path: '', component: expensive_list_component_1.ExpensiveListComponent },
    { path: 'tea/:id', component: details_component_1.TeaDetailComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map