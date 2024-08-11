"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
class Inventory {
    constructor() {
        this.items = {};
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        if (this.items[item.item]) {
            this.items[item.item] += item.quantity;
        }
        else {
            this.items[item.item] = item.quantity;
        }
    }
    updateItem({ item, quantity }) {
        if (this.items[item] !== undefined) {
            this.items[item] = quantity;
            return true;
        }
        return false;
    }
    deleteItem(item) {
        if (this.items[item]) {
            delete this.items[item];
            return true;
        }
        return false;
    }
}
exports.Inventory = Inventory;
