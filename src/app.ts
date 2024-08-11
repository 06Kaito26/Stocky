import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { Inventory } from './Inventory';

const app = express();
const port = 3000;

app.use(bodyParser.json());

const inventory = new Inventory();

app.get('/inventory', (req: Request, res: Response) => {
    res.json(inventory.getItems());
});

app.post('/inventory', (req: Request, res: Response) => {
    const { item, quantity } = req.body;
    inventory.addItem({ item, quantity });
    res.json({ message: 'Item added successfully', inventory: inventory.getItems() });
});

app.put('/inventory', (req: Request, res: Response) => {
    const { item, quantity } = req.body;
    const success = inventory.updateItem({ item, quantity });
    if (success) {
        res.json({ message: 'Item updated successfully', inventory: inventory.getItems() });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

app.delete('/inventory', (req: Request, res: Response) => {
    const { item } = req.body;
    const success = inventory.deleteItem(item);
    if (success) {
        res.json({ message: 'Item deleted successfully', inventory: inventory.getItems() });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
