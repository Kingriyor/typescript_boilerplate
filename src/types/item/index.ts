export interface IItem {
  name: string;
  price: number;
}

export class Item implements IItem{
  name: string;
  price: number;
  constructor(name: string, price: number){
    this.name = name;
    this.price = price;
  }
}