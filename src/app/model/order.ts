import { CartItem } from './cart.item';


export class Order {
    constructor(private name: string, private city: string, private street, private items: string[]) {}

    toJson(): any {
        return { 'name': this.name, 'city': this.city, 'street': this.street, 'items': this.items };
    }
}
