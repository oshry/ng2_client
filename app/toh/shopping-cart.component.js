"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var cart_service_1 = require("../service/cart.service");
// import {TeaDetailComponent} from "./details.component";
var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(cartService) {
        this.cartService = cartService;
        this.cartItems = [];
        this.sum = 0;
        this.cartService = cartService;
        this.cartItems = cartService.getCart();
        this.totalPrice = this.getTotalPrice(this.cartItems);
    }
    ShoppingCartComponent.prototype.getTotalPrice = function (items) {
        items.forEach(function (entry) {
            if (entry.count > 1) {
                this.sum += parseInt(entry.price) * parseInt(entry.count);
            }
            else {
                this.sum += parseInt(entry.price);
            }
        }, this);
        console.log(this.sum);
    };
    ShoppingCartComponent.prototype.removeFromCart = function (id) {
        this.cartService.remove('blat', id);
        window.location.reload();
    };
    ShoppingCartComponent = __decorate([
        core_1.Component({
            template: "\n    <h2>Shopping Cart</h2>\n    <!--<ul class=\"my-list list-group\">-->\n      <!--<li *ngFor=\"let tea of cartItems\">-->\n        <!--<div class=\"text-container\">-->\n            <!--<div>{{tea.name}}</div>-->\n            <!--<div>{{tea.description}}</div>-->\n            <!--<div>{{tea.price| currency}}</div>-->\n            <!--<div>{{tea.count}}</div>-->\n            <!--<button class=\"btn btn-primary\" (click)=\"removeFromCart(tea.id)\" >Remove</button>-->\n        <!--</div>-->\n        <!--<div class=\"thumb-container\"><img src=\"{{tea.thumb}}\"></div>-->\n      <!--</li>-->\n      \n      <table class=\"table\">\n        <tr>\n            <th></th>\n            <th>Name</th>\n            <th>Description</th>\n            <th>Price</th>\n            <th>Quantity</th>\n            <th></th>\n        </tr>\n        <tr *ngFor=\"let tea of cartItems\" class=\"list-group-item-text\">\n            <td><img src=\"{{tea.thumb}}\"></td>\n            <td>{{tea.name}}</td>\n            <td>{{tea.description}}</td>\n            <td>{{tea.price| currency}}</td>\n            <td *ngIf=\"tea.count\">{{tea.count}}</td>\n            <td *ngIf=\"!tea.count\">1</td>\n            <td>\n                <button class=\"btn btn-primary\" (click)=\"removeFromCart(tea.id)\" >Remove</button>\n            </td>\n        </tr>\n        \n      </table>\n    <!--</ul>-->\n    <p></p>",
            providers: [cart_service_1.CartService]
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());
exports.ShoppingCartComponent = ShoppingCartComponent;
//# sourceMappingURL=shopping-cart.component.js.map