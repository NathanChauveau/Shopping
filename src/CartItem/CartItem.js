/**
 * @name CartItem
 * @desciption This class represents a cart item
 * @author Nathan Chauveau
 * @version 1.0
 * @date 07/02/2025
 */

"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        if (articleId < 1) {
            throw new InvalidArticleIdException();
        }
        this._articleId = articleId;
        this._name = name;
        this.quantity = quantity;
        this.price = price;
    }

    get articleId() {
        return this._articleId;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        if(value < 1) {
            throw new InvalidQuantityException();
        }
        this._quantity = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if(value < 10) {
            throw new InvalidPriceException();
        }
        this._price = value;
    }

    get total() {
        return this._quantity * this._price;
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}



