import { CartItem } from './cart.item';


export class Order {

    name: string;
    surname: string;
    address: string;
    userid: string;
    addressid: string;
    status = 'INPROG';
    poid: string;
    polines = [];

    constructor(name: string, surname: string, address: string) {
        this.name = name;
        this.surname = name;
        this.address = address;
    }

    cartDataToPolines(cartData: any[]) {
        for (const cartItem of cartData) {
            const price = cartItem.count * cartItem.item.price;
            this.polines.push({itemid: cartItem.item._id, count: cartItem.count, poid: this.poid, price: price});
        }

        console.log(this.polines);
    }
}
