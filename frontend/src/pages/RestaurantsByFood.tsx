import { useParams } from "react-router-dom";
import { useResByFood } from "../hooks/useResByFood";
import { useSetAtom, useAtomValue } from "jotai";
import { addToCartAtom, cartAtom } from "../atoms/cartAtom";
import Navbar from "../components/Navbar";
import { useState } from "react";

export const RestaurantByFood = () => {
  const { id } = useParams();
  const { restaurant } = useResByFood(id!);
  const addToCart = useSetAtom(addToCartAtom);
  const cart = useAtomValue(cartAtom);
  const [query, setQuery] = useState("");

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
    <div>
      {/* Navbar with search (optional) */}
      <Navbar currentPage="menu" query={query} setQuery={setQuery} />

      <div className="p-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-orange-500">
          Restaurants Serving This Food
        </h1>

        {/* Updated 4-column responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {restaurant.map((rest) => (
            <div
              key={rest.restaurantId}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col"
            >
              {rest.image && (
                <img
                  src={rest.image}
                  alt={rest.name}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
              )}
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                {rest.name}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                Food: {rest.foodName}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                Price: ₹{rest.price}
              </p>

              <button
                onClick={() => handleAddToCart(rest)}
                className="mt-auto bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition duration-200"
              >
                Add to Cart ({getQuantity(rest.restaurantId, rest.foodId)})
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
