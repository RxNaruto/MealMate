import { useParams, useNavigate } from "react-router-dom";
import { useResByFood } from "../hooks/useResByFood";
import { useSetAtom, useAtomValue } from "jotai";
import { addToCartAtom, cartAtom } from "../atoms/cartAtom";

export const RestaurantByFood = () => {
  const { id } = useParams();
  const { restaurant } = useResByFood(id!);
  const addToCart = useSetAtom(addToCartAtom);
  const cart = useAtomValue(cartAtom);
  const navigate = useNavigate();

  const handleAddToCart = (item: any) => {
    addToCart({
      restaurantId: item.restaurantId,
      restaurantName: item.name,
      price: item.price,
      foodId: item.foodId,
      foodName: item.foodName,
    });
  };

  const getQuantity = (restaurantId: number, foodId: number) => {
    return (
      cart.find(
        (item) =>
          item.restaurantId === restaurantId && item.foodId === foodId
      )?.quantity || 0
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Restaurants Serving This Food</h1>
      <div className="grid grid-cols-2 gap-4">
        {restaurant.map((rest) => (
          <div key={rest.restaurantId} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold">{rest.name}</h2>
            <p className="text-gray-600">Food: {rest.foodName}</p>
            <p className="text-gray-600">Price: ₹{rest.price}</p>
            <button
              onClick={() => handleAddToCart(rest)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart ({getQuantity(rest.restaurantId, rest.foodId)})
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/cart")}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Go to Checkout
      </button>
    </div>
  );
};
