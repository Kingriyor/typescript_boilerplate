import shoppingService from "../src/services/shoppingService";
import {Address } from '../src/types/addess';
import {Cart} from "../src/cart";
import {Item} from "../src/types/item"

describe('Yellow Card Technical Assessment', () => {
  let address1: Address;
  let mycart: Cart;
  let item1: Item;

  beforeEach(() => {
    address1 = shoppingService.createNewAddress("Ariyo street", 105102, "Lagos", "Lagos");
    mycart = shoppingService.createNewCart(address1);
    item1 = shoppingService.createNewItem("Biro", 100);
  });

  describe('ensure the shopping cart is empty when the user begins and the address is set', () => {
    it('should return shopping cart with zero items', () => {
      expect(mycart.items.length).toEqual(0);
    });

    it('should have the correct address set', () => {
      expect(mycart.address).toEqual(address1);
    });
  });

  describe('ensure the shopping cart reflects items when added', () => {
    it('should return shopping cart with added item', () => {
      mycart.addItemsToCart([item1]);
      expect(mycart.items).toContain(item1);
    });

    it('should clear the shopping cart correctly', () => {
      mycart.addItemsToCart([item1]);
      mycart.clearCart();
      expect(mycart.items.length).toEqual(0);
    });
  });
});
