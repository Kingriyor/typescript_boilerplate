import {Cart, NewCart} from "../cart";
import {Address } from '../types/address';
import {Item} from "../types/item"
// import {CartTotal} from "../types/total";

export default class shoppingService{

    static createNewAddress(street: string, code: number, province: string, city: string){
        return new Address(street, code, province, city);
    }

    static createNewItem(name: string, price: number){
        return new Item(name ,price);
    }

    static createNewCart(myAddress: Address){
        // return NewCart(myAddress, []);
        return new Cart(myAddress, []);
    }

    static removeItemsFromCart(mycart: Cart, myItems: Item[]): Cart {
        // Implement logic to remove items from the cart
        myItems.forEach(item => {
          const index = mycart.items.indexOf(item);
          if (index !== -1) {
            mycart.items.splice(index, 1);
          }
        });
        return mycart;
    }

    // static checkoutCart(mycart: Cart){
    //     let amount = 0;
    //     // let myTotal = new CartTotal (12,13);
    //     let currentItems = mycart.items;
    //     for (var item of currentItems){
    //         amount +=  item.price;
    //     }
    //     return amount;
    // }

    
}