export interface IAddress {
  street: string;
  code: number;
  province: string;
  city: string;
}

export class Address implements IAddress{
  street: string;
  code: number;
  province: string;
  city: string;
  constructor(street: string, code: number, province: string, city: string){
    this.street = street;
    this.code = code;
    this.province = province;
    this.city = city;
  }
}
