"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const Inventory_1 = require("./Inventory");
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
const inventory = new Inventory_1.Inventory();
app.get('/inventory', (req, res) => {
    res.json(inventory.getItems());
});
app.post('/inventory', (req, res) => {
    const { item, quantity } = req.body;
    inventory.addItem({ item, quantity });
    res.json({ message: 'Item added successfully', inventory: inventory.getItems() });
});
app.put('/inventory', (req, res) => {
    const { item, quantity } = req.body;
    const success = inventory.updateItem({ item, quantity });
    if (success) {
        res.json({ message: 'Item updated successfully', inventory: inventory.getItems() });
    }
    else {
        res.status(404).json({ message: 'Item not found' });
    }
});
app.delete('/inventory', (req, res) => {
    const { item } = req.body;
    const success = inventory.deleteItem(item);
    if (success) {
        res.json({ message: 'Item deleted successfully', inventory: inventory.getItems() });
    }
    else {
        res.status(404).json({ message: 'Item not found' });
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
