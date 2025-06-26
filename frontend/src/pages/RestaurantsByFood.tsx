import { useParams, useNavigate } from "react-router-dom";
import { useResByFood } from "../hooks/useResByFood";
import { useAtom } from "jotai";
import {
  cartAtom,
  addToCartAtom,
  increaseQtyAtom,
  decreaseQtyAtom,
} from "../atoms/cartAtom";

interface RestaurantItem {
  restaurantId: number;
  name: string;
  price: number;
}

export const RestaurantByFood = () => {
  const { id } = useParams<{ id: string }>();
  const foodId = Number(id);
  const { restaurant } = useResByFood(id!);
  const [cart] = useAtom(cartAtom);
  const [, addToCart] = useAtom(addToCartAtom);
  const [, increaseQty] = useAtom(increaseQtyAtom);
  const [, decreaseQty] = useAtom(decreaseQtyAtom);
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Restaurants Serving This Food</h1>
      <div className="grid grid-cols-2 gap-4">
        {restaurant.map((rest) => {
          const cartItem = cart.find(
            (item) =>
              item.restaurantId === rest.restaurantId &&
              item.foodId === foodId
          );

          return (
            <div
              key={rest.restaurantId}
              className="bg-white p-4 rounded shadow"
            >
              <h2 className="text-lg font-bold">{rest.name}</h2>
              <p className="text-gray-600">Price: ₹{rest.price}</p>
              {cartItem ? (
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQty(cartItem)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    -
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button
                    onClick={() => increaseQty(cartItem)}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() =>
                    addToCart({
                      restaurantId: rest.restaurantId,
                      restaurantName: rest.name,
                      price: rest.price,
                      foodId: foodId,
                    })
                  }
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-6">
        <button
          className="bg-black text-white px-6 py-2 rounded"
          onClick={() => navigate("/cart")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
