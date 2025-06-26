import { useAtom } from "jotai";
import {
  cartAtom,
  increaseQtyAtom,
  decreaseQtyAtom,
} from "../atoms/cartAtom";
import type { CartItem } from "../atoms/cartAtom";

export const CartPage = () => {
  const [cart] = useAtom(cartAtom);
  const [, increaseQty] = useAtom(increaseQtyAtom);
  const [, decreaseQty] = useAtom(decreaseQtyAtom);

  const handleIncrease = (item: CartItem) => {
    increaseQty(item);
  };

  const handleDecrease = (item: CartItem) => {
    decreaseQty(item);
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={`${item.restaurantId}-${item.foodId}`}
              className="bg-white p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">
                  {item.restaurantName}
                </h2>
                <p className="text-sm text-gray-600">Food ID: {item.foodId}</p>
                <p className="text-sm text-gray-600">
                  Restaurant ID: {item.restaurantId}
                </p>
                <p className="text-sm">Price: ₹{item.price}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecrease(item)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncrease(item)}
                  className="px-2 py-1 bg-green-500 text-white rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <p className="text-xl font-bold">Total: ₹{totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
};
