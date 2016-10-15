// Observable Version
import { Injectable }     from '@angular/core';
import { Tea }           from '../data/tea';
import 'rxjs/Rx';

@Injectable()
export class CartService {
    private cart:Tea[]=[];
    addItem(item:Tea){
        this.set('blat', item);
    }
    deleteItem(item:Tea){
        this.cart = this.cart.filter(cartItem=>cartItem.id!==item.id);
    }
    clearCart(){
        this.cart = [];
    }
    getCart():Tea[]{
        return this.get('blat');
    }
    remove(name = 'blat', id, count: number = 1){
        let retVal = false;
        let remove = false;
        if ( this.support() && Number.isInteger(id)) {
            let items = [];
            if( localStorage.getItem(name) ){
                items = JSON.parse( localStorage.getItem(name) );
                for ( var i = 0; i < items.length; i++ ) {
                    if ( items[i].id == id ) {
                        if( items[i].count > count ){
                            items[i].count = items[i].count - count;
                        }else{
                            items[i].count = 0;
                            remove = true;
                        }
                        break;
                    }
                }
            }
            // Push the new data (whether it be an object or anything else) onto the array
            if(remove)
                items = items.splice(id, 1);
            // Re-serialize the array back into a string and store it in localStorage
            localStorage.setItem(name, JSON.stringify(items));
            retVal = true;
        }
        return retVal;
    }
    set(name, value) {
        let retVal = false;
        let exist = false;
        if ( this.support() && value !== 'undefined' && value !== 'null' ) {
            let items = [];
            if(localStorage.getItem(name)){
                items = JSON.parse(localStorage.getItem(name));
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id == value.id) {
                        if(items[i].count){
                            items[i].count++;
                        }else{
                            items[i].count = 2;
                        }
                        exist = true;
                        break;
                    }
                }
            }
            // Push the new data (whether it be an object or anything else) onto the array
            if(!exist)
                items.push(value);
            // Re-serialize the array back into a string and store it in localStorage
            localStorage.setItem(name, JSON.stringify(items));
            retVal = true;
        }
        return retVal;
    }
    get(name) {
        var retVal = null;
        if (this.support()) {
            retVal = JSON.parse(localStorage.getItem(name));
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