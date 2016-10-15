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
// Observable Version
var core_1 = require('@angular/core');
require('rxjs/Rx');
var CartService = (function () {
    function CartService() {
        this.cart = [];
    }
    CartService.prototype.addItem = function (item) {
        this.set('blat', item);
    };
    CartService.prototype.deleteItem = function (item) {
        this.cart = this.cart.filter(function (cartItem) { return cartItem.id !== item.id; });
    };
    CartService.prototype.clearCart = function () {
        this.cart = [];
    };
    CartService.prototype.getCart = function () {
        return this.get('blat');
    };
    CartService.prototype.remove = function (name, id, count) {
        if (name === void 0) { name = 'blat'; }
        if (count === void 0) { count = 1; }
        var retVal = false;
        var remove = false;
        if (this.support() && Number.isInteger(id)) {
            var items = [];
            if (localStorage.getItem(name)) {
                items = JSON.parse(localStorage.getItem(name));
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id == id) {
                        if (items[i].count > count) {
                            items[i].count = items[i].count - count;
                        }
                        else {
                            items[i].count = 0;
                            remove = true;
                        }
                        break;
                    }
                }
            }
            // Push the new data (whether it be an object or anything else) onto the array
            if (remove)
                items = items.splice(id, 1);
            // Re-serialize the array back into a string and store it in localStorage
            localStorage.setItem(name, JSON.stringify(items));
            retVal = true;
        }
        return retVal;
    };
    CartService.prototype.set = function (name, value) {
        var retVal = false;
        var exist = false;
        if (this.support() && value !== 'undefined' && value !== 'null') {
            var items = [];
            if (localStorage.getItem(name)) {
                items = JSON.parse(localStorage.getItem(name));
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id == value.id) {
                        if (items[i].count) {
                            items[i].count++;
                        }
                        else {
                            items[i].count = 2;
                        }
                        exist = true;
                        break;
                    }
                }
            }
            // Push the new data (whether it be an object or anything else) onto the array
            if (!exist)
                items.push(value);
            // Re-serialize the array back into a string and store it in localStorage
            localStorage.setItem(name, JSON.stringify(items));
            retVal = true;
        }
        return retVal;
    };
    CartService.prototype.get = function (name) {
        var retVal = null;
        if (this.support()) {
            retVal = JSON.parse(localStorage.getItem(name));
        }
        return retVal;
    };
    CartService.prototype.support = function () {
        var retVal = false;
        if (typeof Storage !== 'undefined') {
            retVal = true;
        }
        return retVal;
    };
    CartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map