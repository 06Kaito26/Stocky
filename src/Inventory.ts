interface InventoryItem {
    item: string;
    quantity: number;
}

export class Inventory {
    private items: { [key: string]: number } = {};

    getItems(): { [key: string]: number } {
        return this.items;
    }

    addItem(item: InventoryItem): void {
        if (this.items[item.item]) {
            this.items[item.item] += item.quantity;
        } else {
            this.items[item.item] = item.quantity;
        }
    }

    updateItem({ item, quantity }: { item: string, quantity: number }): boolean {
        if (this.items[item] !== undefined) {
            this.items[item] = quantity;
            return true;
        }
        return false;
    }

    deleteItem(item: string): boolean {
        if (this.items[item]) {
            delete this.items[item];
            return true;
        }
        return false;
    }
}

