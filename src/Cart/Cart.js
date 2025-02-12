/**
 * @name Cart
 * @desciption This class represents a cart 
 * @author Nathan Chauveau
 * @version 1.0
 * @date 12/02/2025
 */

"use strict";

const EmptyCartException = require("./EmptyCartException.js");
const UpdateCartException = require("./UpdateCartException.js");

module.exports = class Cart {

    //region private attributes
    //endregion private attributes

    //region public methods

    constructor(cartItems) {
        this._cartItems = cartItems;
    }

    get items() {
        if(this._cartItems === null) {
            throw new EmptyCartException();
        }
        return this._cartItems;
    }
    set items(value) {
        if(value.length === 0) {
            throw new EmptyCartException();
        }
        this._cartItems = value;
    }
    get total() {
        if(this._cartItems === null) {
            throw new EmptyCartException();
        }
        let total = 0;
        this._cartItems.forEach(cartItem => {
            total += cartItem.total;
        });
        return total;
    }

    count(distinct = false) {
        if(this._cartItems === null) {
            throw new EmptyCartException();
        }
        if(distinct){
            let distinctItems = [];
            this._cartItems.forEach(cartItem => {
                if(!distinctItems.includes(cartItem.articleId)){
                    distinctItems.push(cartItem.articleId);
                }
            });
            return distinctItems.length;
        }else{
            let totalQuantity = 0;
            this._cartItems.forEach(cartItem => {
                totalQuantity += cartItem.quantity;
            });
            return totalQuantity;
        }
      
    }
    
}
