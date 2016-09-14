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
var ProductsListComponent = (function () {
    function ProductsListComponent(router, teaService) {
        this.router = router;
        this.teaService = teaService;
        this.mode = 'Observable';
    }
    ProductsListComponent.prototype.onSelect = function (tea) {
        this.router.navigate(['/tea', tea.id]);
    };
    ProductsListComponent.prototype.under20 = function () {
        var under20 = [];
        this.teas.forEach(function (entry) {
            if (entry.price < 20) {
                console.log(entry);
                under20.push(entry);
            }
        });
        this.teas = under20;
    };
    ProductsListComponent.prototype.all = function () {
        var _this = this;
        this.teaService.getTeas()
            .subscribe(function (teas) { return _this.teas = teas; }, function (error) { return _this.errorMessage = error; });
    };
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teaService.getTeas()
            .subscribe(function (teas) { return _this.teas = teas; }, function (error) { return _this.errorMessage = error; });
    };
    ProductsListComponent = __decorate([
        core_1.Component({
            selector: 'products-list',
            template: "\n    <h2>All Products List: </h2>\n    <button (click)=\"under20()\">Under 20</button>  \n    <button (click)=\"all()\">All</button>\n    <ul>\n        \n      <li *ngFor=\"let tea of teas\" (click)=\"onSelect(tea)\">\n        <div class=\"text-container\">\n            <div>{{tea.name}}</div>\n            <div>{{tea.description}}</div>\n            <div>{{tea.price}}</div>\n        </div>\n        <div class=\"thumb-container\"><img src=\"{{tea.thumb}}\"></div>\n      </li>\n    </ul>",
            providers: [tea_service_1.TeaService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, tea_service_1.TeaService])
    ], ProductsListComponent);
    return ProductsListComponent;
}());
exports.ProductsListComponent = ProductsListComponent;
//# sourceMappingURL=products-list.component.js.map