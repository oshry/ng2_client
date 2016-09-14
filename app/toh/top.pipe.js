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
/*
 * Take top 5 teas
 */
var TopPipe = (function () {
    function TopPipe() {
    }
    TopPipe.prototype.sortResults = function (teas, prop, asc) {
        teas = teas.sort(function (a, b) {
            var ap;
            var bp;
            if (prop === 'price') {
                ap = parseInt(a[prop]);
                bp = parseInt(b[prop]);
            }
            else {
                ap = a[prop];
                bp = b[prop];
            }
            if (asc) {
                return (ap > bp) ? 1 : ((ap < bp) ? -1 : 0);
            }
            else {
                return (bp > ap) ? 1 : ((bp < ap) ? -1 : 0);
            }
        });
        return teas;
    };
    TopPipe.prototype.transform = function (allTeas) {
        if (typeof allTeas != 'undefined') {
            allTeas = this.sortResults(allTeas, 'price', false);
            allTeas = allTeas.slice(0, 5);
        }
        return allTeas;
    };
    TopPipe = __decorate([
        core_1.Pipe({ name: 'top5' }), 
        __metadata('design:paramtypes', [])
    ], TopPipe);
    return TopPipe;
}());
exports.TopPipe = TopPipe;
//# sourceMappingURL=top.pipe.js.map