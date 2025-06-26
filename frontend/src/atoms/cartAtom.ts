import { atom } from "jotai";

export interface CartItem {
  restaurantId: number;
  restaurantName: string;
  price: number;
  quantity: number;
  foodId: number;
}

export const cartAtom = atom<CartItem[]>([]);

export const addToCartAtom = atom(
  null,
  (get, set, newItem: Omit<CartItem, "quantity">) => {
    const currentCart = get(cartAtom);
    const existingItem = currentCart.find(
      (item) =>
        item.restaurantId === newItem.restaurantId &&
        item.foodId === newItem.foodId
    );

    if (existingItem) {
      set(
        cartAtom,
        currentCart.map((item) =>
          item.restaurantId === newItem.restaurantId &&
          item.foodId === newItem.foodId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      set(cartAtom, [...currentCart, { ...newItem, quantity: 1 }]);
    }
  }
);

export const increaseQtyAtom = atom(null, (get, set, target: CartItem) => {
  set(
    cartAtom,
    get(cartAtom).map((item) =>
      item.restaurantId === target.restaurantId &&
      item.foodId === target.foodId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
});

export const decreaseQtyAtom = atom(null, (get, set, target: CartItem) => {
  const updatedCart = get(cartAtom)
    .map((item) =>
      item.restaurantId === target.restaurantId &&
      item.foodId === target.foodId
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter((item) => item.quantity > 0);
  set(cartAtom, updatedCart);
});
