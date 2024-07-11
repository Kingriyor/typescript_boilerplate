export interface ICartTotal {
  before: number;
  after: number;
}

export class CartTotal implements ICartTotal{
  before: number;
  after: number;
  constructor(before: number, after: number){
    this.before = before;
    this.after = after;
  }
}

// export interface ICartTotal {
//   total: number;
// }
