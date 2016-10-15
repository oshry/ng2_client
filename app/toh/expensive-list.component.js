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
// import { Component } from '@angular/core';
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var tea_service_1 = require('../service/tea.service');
var ExpensiveListComponent = (function () {
    function ExpensiveListComponent(router, teaService) {
        this.router = router;
        this.teaService = teaService;
        this.mode = 'Observable';
    }
    ExpensiveListComponent.prototype.onSelect = function (tea) {
        this.router.navigate(['/tea', tea.id]);
    };
    ExpensiveListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teaService.getTeas()
            .subscribe(function (teas) { return _this.teas = teas; }, function (error) { return _this.errorMessage = error; });
    };
    ExpensiveListComponent = __decorate([
        core_1.Component({
            selector: 'expensive-list',
            template: "\n    <h2>Homepage</h2>\n    <ul class=\"my-list list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let tea of teas | top5\" (click)=\"onSelect(tea)\">\n        <p class=\"list-group-item-text my-list-item\">\n            <span class=\"list-group-item-heading my-list-item-heading\">{{tea.name}}</span>\n            <span class=\"my-list-item-body\">{{tea.description}}</span>\n            <span class=\"price\">Price: {{ tea.price | currency}}</span>\n        </p>\n        <div class=\"thumb-container thumbnail\"><img src=\"{{tea.thumb}}\"></div>\n      </li>\n    </ul>",
            providers: [tea_service_1.TeaService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, tea_service_1.TeaService])
    ], ExpensiveListComponent);
    return ExpensiveListComponent;
}());
exports.ExpensiveListComponent = ExpensiveListComponent;
//# sourceMappingURL=expensive-list.component.js.map