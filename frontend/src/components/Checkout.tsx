import { useAtom } from "jotai";
import { cartAtom } from "../atoms/cartAtom";

export const Checkout = () => {
  const [cart] = useAtom(cartAtom);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0)
    return <div className="p-4 text-lg font-semibold">Cart is empty</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout Summary</h1>
      {cart.map((item, index) => (
        <div
          key={index}
          className="mb-2 p-3 border rounded flex justify-between"
        >
          <div>
            <p className="font-semibold">{item.restaurantName}</p>
            <p className="text-sm text-gray-500">Food ID: {item.foodId}</p>
          </div>
          <div>
            ₹{item.price} x {item.quantity} = ₹
            {item.price * item.quantity}
          </div>
        </div>
      ))}
      <div className="mt-4 text-xl font-bold">Total: ₹{totalPrice}</div>
    </div>
  );
};
