import { IAddress, IItem, Item, ICartTotal, CartTotal } from '../types';

export class Cart {
  public address: IAddress;
  public items: Item[];
  public total: ICartTotal;

  constructor(address: IAddress, items?: Item[]) {
    this.address = address;
    this.items = items || [];
    this.total = new CartTotal(0,0);
  }
  
  getItems(){
    return this.items;
  }

  addItemsToCart(itemlist: [Item]) {
    this.items = this.items.concat(itemlist);
  }

  clearCart(){
    this.items = [];
  }

  removeItemsFromCart(itemlist: [Item]){
    // TODO implement 
    const itemsToRemove = itemlist;
    this.items = this.items;
  }

  checkoutCart(){
    let amount = 0;
    for (var item of this.items){
        amount +=  (item.price * item.getCount());
    }
    let newCartTotal = new CartTotal(this.total.after, amount);
    // check to be sure there was an actual change since last checkout
    if (this.total.after != amount){
      this.total = newCartTotal;
    }
    return amount;
  }

}

export const NewCart = (address: IAddress, items?: Item[]): Cart =>
  new Cart(address, items);
