export interface IItem {
  name: string;
  price: number;
  // private quantity: number;
}

export class Item implements IItem{
  name: string;
  price: number;
  private quantity: number;
  constructor(name: string, price: number){
    this.name = name;
    this.price = price;
    this.quantity = 1;
  }
  increaseCount(){
    this.quantity += 1;
  }
  getCount(): number{
    return this.quantity;
  }
}