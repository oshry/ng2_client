import { Component } from '@angular/core';
@Component({
    template: `
    <h2>Shopping Cart</h2>
    <p></p>`
})
export class ShoppingCartComponent {
        set(name, value) {
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
        }
        get(name) {
            var retVal = null;
            if (this.support()) {
                var stored_time = localStorage.getItem(name + '_time');
                if (stored_time == null || stored_time == undefined) {
                    retVal = localStorage.getItem(name);
                } else {
                    var date = new Date();
                    var current = date.getTime();
                    if (stored_time < current) {
                        localStorage.removeItem(name);
                        localStorage.removeItem(name + '_time');
                    } else {
                        retVal = localStorage.getItem(name);
                    }
                }
            }
            return retVal;
        }
        support() {
            var retVal = false;
            if (typeof Storage !== 'undefined') {
                retVal = true;
            }
            return retVal;
        }
 

}