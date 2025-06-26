import { useAtom } from "jotai";
import {
  cartAtom,
  increaseQtyAtom,
  decreaseQtyAtom,
} from "../atoms/cartAtom";

export const CartPage = () => {
  const [cart] = useAtom(cartAtom);
  const [, increaseQty] = useAtom(increaseQtyAtom);
  const [, decreaseQty] = useAtom(decreaseQtyAtom);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{item.foodName}</p>
                <p className="text-sm text-gray-600">{item.restaurantName}</p>
                <p>₹{item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQty(item)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item)}
                  className="px-2 py-1 bg-green-500 text-white rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 font-bold text-xl">
            Total: ₹{totalPrice}
          </div>
        </div>
      )}
    </div>
  );
};
