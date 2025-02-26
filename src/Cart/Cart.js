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
        const distinctCartItems = new Set(this._cartItems.map(cartItem => cartItem.articleId));
        return distinctCartItems.size;
        }
        return this._cartItems.reduce((totalQuantity, cartItem)=> totalQuantity + cartItem.quantity, 0);
    }

    add(cartItem) {
            this._cartItems = [];
        if(cartItem === null ) {
            throw new UpdateCartException();
        }
        this._cartItems.push(cartItem);
    }
}