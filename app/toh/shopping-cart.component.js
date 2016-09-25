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
var ShoppingCartComponent = (function () {
    function ShoppingCartComponent() {
    }
    ShoppingCartComponent.prototype.set = function (name, value) {
        var expires = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
        var retVal = false;
        if (this.support()) {
            if (expires) {
                var date = new Date();
                expires = Math.round(date.setSeconds(date.getSeconds() + expires));
                localStorage.setItem(name + '_time', expires);
            }
            localStorage.setItem(name, value);
            retVal = true;
        }
        return retVal;
    };
    ShoppingCartComponent.prototype.get = function (name) {
        var retVal = null;
        if (this.support()) {
            var stored_time = localStorage.getItem(name + '_time');
            if (stored_time == null || stored_time == undefined) {
                retVal = localStorage.getItem(name);
            }
            else {
                var date = new Date();
                var current = date.getTime();
                if (stored_time < current) {
                    localStorage.removeItem(name);
                    localStorage.removeItem(name + '_time');
                }
                else {
                    retVal = localStorage.getItem(name);
                }
            }
        }
        return retVal;
    };
    ShoppingCartComponent.prototype.support = function () {
        var retVal = false;
        if (typeof Storage !== 'undefined') {
            retVal = true;
        }
        return retVal;
    };
    ShoppingCartComponent = __decorate([
        core_1.Component({
            template: "\n    <h2>Shopping Cart</h2>\n    <p></p>"
        }), 
        __metadata('design:paramtypes', [])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());
exports.ShoppingCartComponent = ShoppingCartComponent;
//# sourceMappingURL=shopping-cart.component.js.map