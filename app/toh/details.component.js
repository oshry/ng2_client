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
var router_1 = require('@angular/router');
var tea_service_1 = require('../service/tea.service');
var cart_service_1 = require("../service/cart.service");
var TeaDetailComponent = (function () {
    function TeaDetailComponent(route, router, service, cartService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.cartService = cartService;
    }
    TeaDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.tea_id = +params['id']; // (+) converts string 'id' to a number
        });
        this.service.getTea(this.tea_id)
            .subscribe(function (tea) { return _this.tea = tea; }, function (error) { return _this.errorMessage = error; });
    };
    TeaDetailComponent.prototype.addToCart = function () {
        this.cartService.addItem(this.tea);
    };
    TeaDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TeaDetailComponent.prototype.gotoTeas = function () { this.router.navigate(['/teas']); };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TeaDetailComponent.prototype, "tea", void 0);
    TeaDetailComponent = __decorate([
        core_1.Component({
            template: "\n    <!--<h2>Product Page</h2>-->\n    <!--<div *ngIf=\"tea\">-->\n    <!--<div class=\"text-container\">-->\n            <!--<div>{{tea.name}}</div>-->\n            <!--<div>{{tea.description}}</div>-->\n            <!--<div>{{tea.price}}</div>-->\n    <!--</div>-->\n    <!--<div class=\"thumb-container\"><img src=\"{{tea.thumb}}\"></div>-->\n    <!--</div>-->\n    \n    <div *ngIf=\"tea\" class=\"list-group-item\">\n        <p class=\"list-group-item-text my-list-item\">\n            <span class=\"list-group-item-heading my-list-item-heading\">{{tea.name}}</span>\n            <span class=\"my-list-item-body\">{{tea.description}}</span>\n            <span class=\"price\">Price: {{tea.price| currency}}</span>\n        </p>\n        <div class=\"thumb-container thumbnail\"><img src=\"{{tea.thumb}}\"></div>\n        <button class=\"btn btn-primary\" (click)=\"addToCart()\">Add To Cart</button>\n        <button class=\"btn btn-primary\" (click)=\"gotoTeas()\">Back</button>\n    </div>",
            providers: [tea_service_1.TeaService, cart_service_1.CartService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, tea_service_1.TeaService, cart_service_1.CartService])
    ], TeaDetailComponent);
    return TeaDetailComponent;
}());
exports.TeaDetailComponent = TeaDetailComponent;
//# sourceMappingURL=details.component.js.map