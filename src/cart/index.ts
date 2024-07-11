import { IAddress, IItem, Item } from '../types';

export class Cart {
  public address: IAddress;
  public items: IItem[];
  constructor(address: IAddress, items?: IItem[]) {
    this.address = address;
    this.items = items || [];
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

}

export const NewCart = (address: IAddress, items?: IItem[]): Cart =>
  new Cart(address, items);
