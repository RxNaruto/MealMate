import { useAtom } from "jotai";
import {
  cartAtom,
  increaseQtyAtom,
  decreaseQtyAtom,
} from "../atoms/cartAtom";

import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { removeItemAtom } from "../atoms/cartAtom"; // 👈 custom atom we'll define below

export const CartPage = () => {
  const [cart] = useAtom(cartAtom);
  const [, increaseQty] = useAtom(increaseQtyAtom);
  const [, decreaseQty] = useAtom(decreaseQtyAtom);
  const [, removeItem] = useAtom(removeItemAtom);
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const goBack = () => navigate("/food");

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <button
              onClick={goBack}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Menu
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Add some delicious items to get started!
            </p>
            <button
              onClick={goBack}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Browse Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <button
            onClick={goBack}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Menu
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>
            <p className="text-gray-600">{cart.length} items</p>
          </div>

          <div className="divide-y divide-gray-200">
            {cart.map((item) => (
              <div
                key={`${item.restaurantId}-${item.foodId}`}
                className="p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold text-xl">
                    🍽️
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-gray-900">
                      {item.foodName}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.restaurantName}
                    </p>
                    <p className="text-orange-600 font-bold text-lg">
                      ₹{item.price}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => decreaseQty(item)}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>

                    <span className="w-8 text-center font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item)}
                      className="w-8 h-8 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-900">
                Total:
              </span>
              <span className="text-2xl font-bold text-orange-600">
                ₹{totalPrice.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
