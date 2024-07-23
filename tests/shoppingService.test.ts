import shoppingService from "../src/services/shoppingService";
import {Address } from '../src/types/address';
import {Cart} from "../src/cart";
import {Item} from "../src/types/item"
import {CartTotal} from "../src/types/total";

describe('Yellow Card Technical Assessment', () => {
  let address1: Address;
  let mycart: Cart;
  let item1: Item;
  let item2: Item;

  beforeEach(() => {
    address1 = shoppingService.createNewAddress("Ariyo street", 105102, "Lagos", "Lagos");
    mycart = shoppingService.createNewCart(address1);
    item1 = shoppingService.createNewItem("Biro", 100);
    item2 = shoppingService.createNewItem("Notebook", 200);
  });

  afterEach(() => {
    mycart.clearCart();
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

  describe('ensure checkout works', () => {
    it('should return total ', () => {
      mycart.addItemsToCart([item1]);
      const returnedAmount: number = mycart.checkoutCart();
      const expectedCartTotal: CartTotal = new CartTotal(0,100);
      expect(mycart.total).toEqual(expectedCartTotal);
      expect(returnedAmount).toBe(100);
    });

    it('should also return total after second checkout',() => {
      // Add first item and checkout
      mycart.addItemsToCart([item1]);
      mycart.checkoutCart();

      // Add 2 units of item2 after first checkout and test again
      item2.increaseCount();
      mycart.addItemsToCart([item2]);
      let returnedAmount: number = mycart.checkoutCart();
      let expectedCartTotal: CartTotal = new CartTotal(100,500);
      expect(mycart.total).toEqual(expectedCartTotal);
      expect(returnedAmount).toBe(500);
    });

      
  });
});
